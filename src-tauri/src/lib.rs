use std::collections::BTreeMap;

mod model;

use model::{Activity, Job, Area};

#[tauri::command]
fn get_activities() -> Result<BTreeMap<String, Vec<Activity>>, String> {
    let mut activities = vec![
        Activity::new(1, Job::OTPV, "Descripción".to_string(), "Solución".to_string(), "2022-01-01".to_string(), "2022-01-02".to_string(), Area::Molino, false),
        Activity::new(2, Job::OTFM, "Descripción".to_string(), "Solución".to_string(), "2022-01-01".to_string(), "2022-01-02".to_string(), Area::Chancado, false),
        Activity::new(3, Job::OTCO, "Descripción".to_string(), "Solución".to_string(), "2022-01-01".to_string(), "2022-01-02".to_string(), Area::EmbolsadoICO, false),
        Activity::new(4, Job::OTPD, "Descripción".to_string(), "Solución".to_string(), "2022-01-01".to_string(), "2022-01-02".to_string(), Area::EmbolsadoSur, false),
        Activity::new(5, Job::OTEM, "Descripción".to_string(), "Solución".to_string(), "2022-01-01".to_string(), "2022-01-02".to_string(), Area::Garita, false),
    ];

    // Ordenamos las actividades por fecha
    activities.sort_by(|a, b| a.get_start_date().cmp(&b.get_start_date()));

    // Agrupamos por fecha usando BTreeMap (mantiene ordenado)
    let mut grouped_activities: BTreeMap<String, Vec<Activity>> = BTreeMap::new();
    for activity in activities {
        grouped_activities.entry(activity.get_start_date().clone()).or_default().push(activity);
    }

    Ok(grouped_activities)
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_activities])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
