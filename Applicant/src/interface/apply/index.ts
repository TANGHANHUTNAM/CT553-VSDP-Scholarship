import { FormBlockInstance } from "../form-blocks";
import { IUniversityResponse } from "../university";

export interface IFormResponse {
  id: string;
  name: string;
  description: string;
  creator_name: string | null;
  creator_id: string | null;
  is_public: boolean;
  is_default: boolean;
  start_date: string;
  end_date: string;
  scope: string;
  primary_color: string | null;
  block_color: string | null;
  background_color: string | null;
  image_url: string | null;
  public_id: string | null;
  created_at: string;
  updated_at: string;
  form_sections: IFormSectionsResponse[];
  universities?: IUniversityResponse[];
}

export interface IFormSectionsResponse {
  id: number;
  name: string;
  description: string;
  json_blocks: FormBlockInstance[];
  created_at: string;
  updated_at: string;
  form_id: string;
}

export interface IFormSubmitRequest {
  name: string;
  email: string;
  phone_number: string;
  university_id?: number;
  form_id: string;
}

export interface IFormSubmitResponse {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  created_at: string;
  form_id: string;
  status: string;
  university_id: number;
  final_scores: unknown[];
  total_final_score: number | null;
}
