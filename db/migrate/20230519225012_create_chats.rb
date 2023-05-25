class CreateChats < ActiveRecord::Migration[6.1]
  def change
    create_table :chats do |t|
      t.string :name
      t.integer :profile_id
      t.integer :profile_two_id

      t.timestamps
    end
  end
end
