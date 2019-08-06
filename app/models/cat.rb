class Cat < ApplicationRecord
    validates :name, :age, :enjoys, presence: true
    validates :enjoys, length: { minimum: 10 }
    has_one_attached :avatar
    
end
