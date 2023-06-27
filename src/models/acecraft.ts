export interface Notes {
    id: number;
    title: string;
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
    gender:string[];
    department:string[];
    quantity: number[];
    description: string[];
}