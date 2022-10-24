import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SECTION_MODEL } from 'constant';
import { Model } from 'mongoose';
import { Section } from 'src/app.interface';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(SECTION_MODEL) private readonly sectionModel: Model<Section>,
  ) {}

}
