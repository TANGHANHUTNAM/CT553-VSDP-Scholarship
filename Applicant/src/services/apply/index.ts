import {
  IFormResponse,
  IFormSubmitRequest,
  IFormSubmitResponse,
} from "../../interface/apply";
import { IResponse } from "../../interface/response";
import axiosClient from "../apiClient";

export const getFormScholarshipService = async (): Promise<
  IResponse<IFormResponse>
> => {
  return axiosClient.get("/forms/public/scholarship");
};

export const submitFormScholarshipService = async (
  data: IFormSubmitRequest,
): Promise<IResponse<IFormSubmitResponse>> => {
  return axiosClient.post("/form-responses/submit/form", data);
};
