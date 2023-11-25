defmodule SweBack.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "users" do
    field :password_hash, :string
    field :username, :string
    belongs_to :admin, SweBack.Admins.Admin, foreign_key: :admin_id
    belongs_to :maintenance_person, SweBack.MaintenancePersons.MaintenancePerson, foreign_key: :maintenance_person_id
    belongs_to :fueling_person, SweBack.FuelingPersons.FuelingPerson, foreign_key: :fueling_person_id
    belongs_to :driver, SweBack.Drivers.Driver, foreign_key: :driver_id

    timestamps(updated_at: false)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password_hash])
    |> validate_required([:username, :password_hash])
  end
end
