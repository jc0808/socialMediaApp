class User < ApplicationRecord
    has_one :profile, dependent: :destroy

    validates :username, presence: true
    validates :username, uniqueness: true
    has_secure_password
end
