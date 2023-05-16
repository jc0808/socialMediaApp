class Follower < ApplicationRecord
    belongs_to :profile
    belongs_to :following, :class_name => 'Profile'


    # def followers_profiles
    #     self.profile
    # end

    def followers_profiles
        profile = {
                
                firstName: self.profile.firstName,
            
                lastName: self.profile.lastName
            }
        
    end

end
