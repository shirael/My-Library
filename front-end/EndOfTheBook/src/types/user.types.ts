export type UserType = {
    userId?: number;
    name: string;
    mail: string;
    password: string;
    phone: string; 
    role: number;
  };
  
export type UserLogin = {
  mail: string;
  password: string;
}