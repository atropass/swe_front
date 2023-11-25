defmodule SweBack.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :username, :string
      add :password_hash, :string
      add :admin_id, references(:admins, on_delete: :nothing, type: :binary_id)
      add :maintenance_id, references(:maintenance_persons, on_delete: :nothing, type: :binary_id)
      add :fuelingperson_id, references(:fueling_persons, on_delete: :nothing, type: :binary_id)
      add :driver_id, references(:drivers, on_delete: :nothing, type: :binary_id)

      timestamps(updated_at: false)
    end
  end
end
