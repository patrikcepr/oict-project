import axios from 'axios';
import React, { createContext, useState, useCallback, useEffect } from 'react';

export interface IChildren {
  children?: JSX.Element;
}

interface IProperties {
  address: {
    street_address: string;
    address_formatted: string;
  };
  district: string;
  email: string[];
  id: string;
  name: string;
  opening_hours: {
    closes: string;
    day_of_week: string;
    opens: string;
  }[];
  telephone: string[];
  type: {
    description: string;
  };
  web: string[];
}

interface IResponseData {
  [key: string]: IProperties;
}

interface IAppCtx {
  data: IResponseData[];
  lang: string;
  onChooseLang: (lang: string) => void;
  detail: IResponseData;
  isLoading: boolean;
  error: string | null;
  showModalState: boolean;
  hideModal: () => void;
  showModal: (index: number) => void;
  setApikey: (apikey: string) => void;
  apikey: string;
  // district: string;
}

const AppContext = createContext<IAppCtx>({
  data: [],
  lang: 'cs',
  onChooseLang: (lang: string) => {},
  detail: {},
  isLoading: false,
  error: null,
  showModalState: false,
  hideModal: () => {},
  showModal: (index: number) => {},
  setApikey: (apikey: string) => {},
  apikey: '',
  // district: '',
});

const mockUrl =
  'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/medicalinstitutions/?latlng=&range=&districts=&group=&limit=&offset=&updatedSince=';

const productionUrl =
  'https://api.golemio.cz/v2/medicalinstitutions/?latlng=&range=&districts=praha-7&group=&limit=&offset=&updatedSince=';

const publicToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhY2thdGhvbkBnb2xlbWlvLmN6IiwiaWQiOjIsIm5hbWUiOiJIYWNrYXRob24iLCJzdXJuYW1lIjoiR29sZW1pbyIsImlhdCI6MTU4NDU0NDYzMSwiZXhwIjoxMTU4NDU0NDYzMSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjVlNjU2NDQxLTA4OGUtNDYyYS1iMjUyLTFiNzI1OGU0ZGJkYSJ9.ypDAJirgEs8VBSauraFEoLTTtC6y_F8V1fheAHgzMos';

export const AppContextProvider = ({ children }: IChildren) => {
  const [lang, setLang] = useState('cs');
  const [isLoading, setIsLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<IResponseData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [apikey, setApikey] = useState('');
  // const [district, setDistrict] = useState('');

  const chooseLangHandler = (lang: string) => {
    setLang(lang);
  };

  let url: string;
  let token: string;

  if (apikey) {
    url = productionUrl;
    token = apikey;
  } else {
    url = mockUrl;
    token = publicToken;
  }

  const getDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
      });
      const fetchedData = response.data.features;
      setData(fetchedData);
    } catch (error: any) {
      console.log('error', error);
      setError(() => error.message);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, url]);

  useEffect(() => {
    getDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apikey]);

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showModalHandler = (index: number) => {
    setDetail(data[index]);
    setShowModal(true);
    scrollToTop();
  };

  return (
    <AppContext.Provider
      value={{
        data: data,
        isLoading: isLoading,
        error: error,
        lang: lang,
        onChooseLang: chooseLangHandler,
        detail: detail,
        showModalState: showModal,
        hideModal: hideModalHandler,
        showModal: showModalHandler,
        setApikey: setApikey,
        apikey: apikey,
        // district: data[0].properties.district,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
