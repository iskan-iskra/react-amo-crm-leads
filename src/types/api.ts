export type TiApiListResponse<T> = {
  _page: number;
  _links: {
    self: {
      href: string;
    };
    next: {
      href: string;
    };
  };
  _embedded: T;
};
