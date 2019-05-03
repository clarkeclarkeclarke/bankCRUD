class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.integer :accountnumber
      t.integer :routingnumber
      t.string :bankaddress
      t.string :banknickname

      t.timestamps
    end
  end
end
