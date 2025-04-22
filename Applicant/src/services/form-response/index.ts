import axiosClient from "../apiClient";
import { IResponse } from "../../interface/response";
import { IDataFormResponse } from "../../interface/form-response";

export const getAllFormResponseScholarshipService = async (): Promise<
  IResponse<IDataFormResponse>
> => {
  return axiosClient.get("/public/all/form-response/form-scholarship");
};
