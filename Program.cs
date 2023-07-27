var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serving static files (HTML, CSS, JS, JPG, etc)
app.UseStaticFiles();

// ==================================== Endpoints ==========================================
// Setup the endpoints and the methods that will
// run when those endpoints are requested

// Returning the index html, so the user does not have to specify: www.ourpage.com/index.html
app.MapGet("/", () => {
  return Results.File("index.html", "text/html");
});


app.Run();
