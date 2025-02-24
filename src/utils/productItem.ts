export interface ProductItemType {
  text: string;
  paragraph: string;
  getStarted: boolean;
  active: boolean;
}

export const productData: ProductItemType[] = [
  {
    text: "kimZon",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum ad sapiente, illo hic officia ?",
    getStarted: true,
    active: true,
  },
  {
    text: "minakazo",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum ad sapiente, illo hic officia ?",
    getStarted: true,
    active: false,
  },
  {
    text: "sakamoto",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum ad sapiente, illo hic officia ?",
    getStarted: true,
    active: false,
  },
];
