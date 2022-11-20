interface Transportation {
  name: string;
}

export default interface Quote {
  id: number;
  name: string;
  departureLocation: string;
  destinationLocation: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  transportation: Transportation;
  contact: string;
  price: number;
}
