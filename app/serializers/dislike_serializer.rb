class DislikeSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :post_id
end
