type UserAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string | number,
    geo: {
        lat: string | number,
        lng: string | number
    }
};

type UserCompany = {
    name: string,
    catchPhrase: string,
    bs: string
};

export interface UserInterface  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string | number,
    website: string,
    company: UserCompany 
}