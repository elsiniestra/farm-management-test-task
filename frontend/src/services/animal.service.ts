import { AxiosResponse } from 'axios';
import { $api } from '@/api/interceptors';

const AnimalService = {
  async list(): Promise<AxiosResponse<Animal[]>> {
    return $api.get('farm/animals/');
  },

  async create(data: AnimalCreate): Promise<AxiosResponse<Animal>> {
    return $api.post('farm/animals/', data);
  },

  async delete(id: number): Promise<AxiosResponse<null>> {
    return $api.delete(`farm/animals/${id}/`);
  },
};

export default AnimalService;
