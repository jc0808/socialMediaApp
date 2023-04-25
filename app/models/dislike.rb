class Dislike < ApplicationRecord

    belongs_to :profile
    belongs_to :post
end
