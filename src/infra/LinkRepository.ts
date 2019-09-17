import { injectable } from 'inversify';
import Data from '../assets/data/Links.json';
import ILinkRepository from '../domain/link_aggregate/ILinkRepository';
import Link from '../domain/link_aggregate/Link';
import AJsonDataRepository from './AJsonDataRepository';

@injectable()
export default class LinkRepository extends AJsonDataRepository<Link> implements ILinkRepository {
    protected readonly json: any = Data;
}
