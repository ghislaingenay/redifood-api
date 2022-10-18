import { Controller, Get, Patch } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  // Get info from DB - any type because I don't know what will be implemented in profile page
  getProfileData(): any {
    return this.profileService.getProfileData();
  }

  @Patch()
  // Patch info into DB - any type because I don't know what will be implemented in profile page
  updateInformations(): any {
    return this.profileService.UpdateInformations();
  }
}