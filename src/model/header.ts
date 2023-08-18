export interface IHeaderProps {
  'Content-Type'?: string | null;
  Accept?: string | null;
}

class Header {
  private props: IHeaderProps;

  private constructor(props: IHeaderProps) {
    this.props = props;
  }

  public static Builder(props?: IHeaderProps): Header {
    if (props) {
      return new Header(props);
    } else
      return new Header({
        'Content-Type': null,
        Accept: null,
      });
  }

  contentType(contentType?: string | null): Header {
    this.props['Content-Type'] = contentType;
    return this;
  }

  accept(accept?: string | null): Header {
    this.props.Accept = accept;
    return this;
  }

  build(): IHeaderProps {
    return this.props;
  }
}

export default Header;
