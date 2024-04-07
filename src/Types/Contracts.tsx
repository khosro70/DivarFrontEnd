export interface CategoryItemPropsInterface {
  category: {
    _id: string;
    icon: string;
    slug: string;
    name: string;
  };
}

export interface CardPropsInterface {
  post: any;
}

export interface SelectOptionPropsInterface {
  control: any;
  errors: any;
}

export interface HomeSidebarProps {
  categories: any;
}

export interface paramsInterface {
  params: {
    postId: string;
    searchParams: object;
  };
}

export interface SelectOptionPropsInterface {
  name: string;
  label: string;
  control: any;
  data: any;
  errors: any;
}
