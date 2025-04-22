import { IFormResponse } from "../../interface/apply";
import { IResponse } from "../../interface/response";
import axiosClient from "../apiClient";

export const getFormShareService = async (
  form_id: string,
  token: string,
): Promise<IResponse<IFormResponse>> => {
  return axiosClient.get(
    `/forms/share-link/${form_id}${token ? `?token=${token}` : ""}`,
  );
};
