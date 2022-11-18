export default interface Quote {
  id: number;
  name: string;
  departureLocation: string;
  destinationLocation: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  transportation: string;
  contact: string;
  price: number;
}
