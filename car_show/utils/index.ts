import { CarProps, FilterProps } from "@/Types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    'X-RapidAPI-Key': 'da1e998b7cmsh8105114ae6294b3p1e77d7jsn04fc22acbc05',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
// API Ảnh 
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  //biến angle là góc quay của xe 
  const url = new URL('http://cdn.imagin.studio/getimage')

  const {make,year,model} = car;

  url.searchParams.append('customer','hrjavascript-mastery');
  url.searchParams.append('make',make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);
  
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}
