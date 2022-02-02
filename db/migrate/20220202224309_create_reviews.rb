class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.boolean :recommend, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :reviews, [:user_id, :game_id], unique: true
  end
end
