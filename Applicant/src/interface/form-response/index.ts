export interface IFormResponseScholarship {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  university: string;
  created_at: string;
}

export interface IDataFormResponse {
  form_id: string;
  form_name: string;
  form_response: IFormResponseScholarship[];
}
