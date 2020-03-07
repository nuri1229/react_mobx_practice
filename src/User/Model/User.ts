type address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    let: string,
    lng: string,
  }
}

type company = {
  name: string,
  catchPharase: string,
  bs: string
}

export type user = {
  id: number,
  name: string,
  email: string,
  address: address,
  phone: string,
  website: string,
  company: company
}

