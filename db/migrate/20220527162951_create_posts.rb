class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :location
      t.text :review
      t.integer :star_rating
      t.text :picture
      t.boolean :day, default: true
      t.bigint :user_id
      t.timestamps
    end
  end
end
