import * as repository from "../database/repositories/FilmsRepository"
import { FilmInput, FilmOutput } from "../database/models/FilmsModel";

export const getAll = async (): Promise<FilmOutput[]> => {
    return await repository.getAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
    return await repository.getById(id);
}

export const create = async (payload: FilmInput) => {
    return await repository.create(payload);
}

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    return await repository.updateById(id, payload);
}

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
}