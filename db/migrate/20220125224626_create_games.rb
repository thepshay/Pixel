class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.float :price, null: false
      t.string :genre_1, null: false
      t.string :genre_2
      t.string :short_about, null: false
      t.text :extended_about, null: false
      t.timestamps
    end
    add_index :games, :title, unique: true
  end
end
