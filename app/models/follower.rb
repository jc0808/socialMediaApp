class Follower < ApplicationRecord
    belongs_to :profile
    belongs_to :following, :class_name => 'Profile'
end
