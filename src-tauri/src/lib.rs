#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  // This should be called as early in the execution of the app as possible
  #[cfg(debug_assertions)] // only enable instrumentation in development builds
  let devtools = tauri_plugin_devtools::init();

  let mut builder = tauri::Builder::default();

  #[cfg(debug_assertions)]
  {
    builder = builder.plugin(devtools);
  }

  builder
      .plugin(tauri_plugin_geolocation::init())
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}