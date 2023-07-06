export interface Notes {
    id: number;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    p9: string;
    p10: string;
    p11: string;
    p12: string;
    p13: string;
    p14: string;
    p15: string;
    p16: string;
    header: string;
    conclusion: string;
    subhead1: string;
    subhead2: string;
    subhead3: string;
    subhead4: string;
    subhead5: string;
    subhead6: string;
    subhead7: string;
    subhead8: string;
    subhead9: string;
    subhead10: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    list5: string;
    list6: string;
    list7: string;
    list8: string;
    list9: string;
    list10: string;
    list11: string;
    list12: string;
    list13: string;
}

export interface Schools {
    id: number;
    logo: string;
    name: string;
}

export interface Honda {
    id: number;
    image: string;
    text: string;
    pcode: string;
    brand: string;
    soldby: string;
    price: number;
    originalprice: number;
    offerpercent: number;
    gender: string[];
    quantity: number[];
    department: string[];
    description: string[];
    header1: string;
    header2: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
}

export interface Uniforms {
    id: number;
    image: string;
    text: string;
    pcode: string;
    brand: string;
    soldby: string;
    price: number;
    originalprice: number;
    offerpercent: number;
    size: number[];
    size1: string[];
    length: number[];
    waist: number[];
    quantity: number[];
    policy: string;
    description: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    t1: string;
    t2: string;
    t3: string;
}

export interface Cart {
    id: number | any;
    text: string | undefined;
    image: string | undefined;
    size: number | any;
    size1: string | undefined;
    gender: string | undefined;
    department: string | undefined;
    quantity: number | any;
    price: number | any;
    totalprice: number | any;
    originalprice: number | any;
    offerpercent: number | any;
}
