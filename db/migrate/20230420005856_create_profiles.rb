class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :firstName
      t.string :lastName
      t.integer :user_id
      t.string :location
      t.string :image

      t.timestamps
    end
  end
end
