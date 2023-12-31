defmodule SweBackWeb.VehicleController do
  use SweBackWeb, :controller

  alias SweBack.Vehicles
  alias SweBack.Vehicles.Vehicle

  action_fallback SweBackWeb.FallbackController

  def index(conn, _params) do
    vehicles = Vehicles.list_vehicles()
    render(conn, :index, vehicles: vehicles)
  end

  def create(conn, %{"vehicle" => vehicle_params}) do
    with {:ok, %Vehicle{} = vehicle} <- Vehicles.create_vehicle(vehicle_params) do
      conn
      |> put_status(:created)
      |> render(:show, vehicle: vehicle)
    end
  end

  def show(conn, %{"id" => id}) do
    vehicle = Vehicles.get_vehicle!(id)
    render(conn, :show, vehicle: vehicle)
  end

  def update(conn, %{"id" => id, "vehicle" => vehicle_params}) do
    vehicle = Vehicles.get_vehicle!(id)

    with {:ok, %Vehicle{} = vehicle} <- Vehicles.update_vehicle(vehicle, vehicle_params) do
      render(conn, :show, vehicle: vehicle)
    end
  end

  def delete(conn, %{"id" => id}) do
    vehicle = Vehicles.get_vehicle!(id)

    with {:ok, %Vehicle{}} <- Vehicles.delete_vehicle(vehicle) do
      send_resp(conn, :no_content, "")
    end
  end
end
