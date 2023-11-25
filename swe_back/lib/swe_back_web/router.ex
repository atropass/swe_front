defmodule SweBackWeb.Router do
  use SweBackWeb, :router
  use Plug.ErrorHandler

  def handle_errors(conn, %{reason: %Phoenix.Router.NoRouteError{message: message}}) do
    conn |> json(%{errors: message}) |> halt()
  end

  def handle_errors(conn, %{reason: %{message: message}}) do
    conn |> json(%{errors: message}) |> halt()
  end

  def handle_errors(conn, any) do
    IO.inspect(any, label: "any")
    conn |> json(%{errors: "message"}) |> halt()
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", SweBackWeb do
    pipe_through :api

    #post("/send", EmailController, :send_email)
    post "/appointments", EmailController, :send_appointment
    scope "/admin" do
      post("/create", AdminController, :create)
      get("/read/:id", AdminController, :show)
      put("/update/:id", AdminController, :update)
      delete("/delete/:id", AdminController, :delete)
    end

    scope "/driver" do
      post("/create", DriverController, :create)
      get("/read/:id", DriverController, :show)
      put("/update/:id", DriverController, :update)
      delete("/delete/:id", DriverController, :delete)
    end

    scope "/maintenance" do
      post("/create", MaintenancePersonController, :create)
      get("/read/:id", MaintenancePersonController, :show)
      put("/update/:id", MaintenancePersonController, :update)
      delete("/delete/:id", MaintenancePersonController, :delete)
    end

    scope "/fueling" do
      post("/create", FuelingPersonController, :create)
      get("/read/:id", FuelingPersonController, :show)
      put("/update/:id", FuelingPersonController, :update)
      delete("/delete/:id", FuelingPersonController, :delete)
    end

    scope "/user" do
      post("/create", UserController, :create)
      get("/read/:id", UserController, :show)
      put("/update/:id", UserController, :update)
      delete("/delete/:id", UserController, :delete)
    end

    scope "/vehicle" do
      post("/create", VehicleController, :create)
      get("/read/:id", VehicleController, :show)
      put("/update/:id", VehicleController, :update)
      delete("/delete/:id", VehicleController, :delete)
    end

    scope "/maintenance_task" do
      post("/create", DriverTaskController, :create)
      get("/read/:id", DriverTaskController, :show)
      put("/update/:id", DriverTaskController, :update)
      delete("/delete/:id", DriverTaskController, :delete)
    end

    scope "/fueling_task" do
      post("/create", FuelingTaskController, :create)
      get("/read/:id", FuelingTaskController, :show)
      put("/update/:id", FuelingTaskController, :update)
      delete("/delete/:id", FuelingTaskController, :delete)
    end

    scope "/driver_task" do
      post("/create", DriverTaskController, :create)
      get("/read/:id", DriverTaskController, :show)
      put("/update/:id", DriverTaskController, :update)
      delete("/delete/:id", DriverTaskController, :delete)
    end
  end
end
