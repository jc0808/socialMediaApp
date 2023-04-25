class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :user_id, :location
end
