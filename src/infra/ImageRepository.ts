import { injectable } from 'inversify';
import Data from '../assets/data/Images.json';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
import AJsonDataRepository from './AJsonDataRepository';

@injectable()
export default class ImageRepository extends AJsonDataRepository<Image> implements IImageRepository {
    protected readonly json: any = Data;
}
