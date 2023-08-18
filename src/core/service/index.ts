import Axios, { AxiosRequestConfig, Method } from 'axios';
import { IHeaderProps } from '@model/header';
import Constantes from './constantes';
import Contextos from './contextos';

const { APPLICATION_JSON } = Constantes;
const { BASE_URL } = Contextos;

class Service {
  private readonly api = Axios.create({ baseURL: BASE_URL });
  private readonly props: AxiosRequestConfig;

  public constructor(props: AxiosRequestConfig, auth: boolean) {
    this.props = props;
    let Authorization = undefined;
    //if (auth) Authorization = `Bearer ${getToken()}`;
    this.props.headers = {
      ...this.props.headers,
      Authorization,
    };
  }

  public static get = () => this.newService('GET', true);
  public static post = () => this.newService('POST', true);
  public static put = () => this.newService('PUT', true);
  public static delete = () => this.newService('DELETE', true);
  public static getNoAuth = () => this.newService('GET', false);

  private static readonly newService = (metodo: Method, auth: boolean) => {
    const propsDefault: AxiosRequestConfig = {
      headers: {
        Accept: APPLICATION_JSON,
        'Content-Type': APPLICATION_JSON,
      },
    };

    const service = new Service(propsDefault, auth);
    service.props.method = metodo;
    return service;
  };

  public url(url: string) {
    this.props.url = url;
    return this;
  }

  public headers(headers: IHeaderProps) {
    this.props.headers = {
      ...this.props.headers,
      ...headers,
    };
    return this;
  }

  public params(params: any) {
    this.props.params = params;
    return this;
  }

  public data(data: any) {
    this.props.data = data;
    return this;
  }
  public responseType(responseType: any) {
    this.props.responseType = responseType;
    return this;
  }

  public request = async (): Promise<any> => {
    return await this.api.request(this.props);
  };
}

export default Service;
