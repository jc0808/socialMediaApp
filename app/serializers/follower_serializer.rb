class FollowerSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :following_id, :followers_profiles

  
end
