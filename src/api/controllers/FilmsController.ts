import * as service from "../../services/FilmsService"
import { FilmInput, FilmOutput } from "../../database/models/FilmsModel";

export const getAll = async (): Promise<FilmOutput[]> => {
    return await service.getAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
    return await service.getById(id);
}

export const create = async (payload: FilmInput) => {
    return await service.create(payload);
}

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    return await service.updateById(id, payload);
}

export const deleteById = async (id: number): Promise<void> => {
    return await service.deleteById(id);
}