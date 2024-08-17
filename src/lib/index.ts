// place files you want to import through the `$lib` alias in this folder.
interface Image {
	image: string;
	caption: string;
	position: number;
}

interface EarlyAccess {
	start: string;
	end: string;
	active: boolean;
	mode: string;
}

interface Location {
	lat: number;
	lon: number;
}

interface ObjectAdDetails {
	campaign_id: null | number;
	is_renovated: boolean;
	heat_included: boolean;
	water_included: boolean;
	electricity_included: boolean;
	tv_included: boolean;
	internet_included: boolean;
	has_washing_machine: boolean;
	is_prepared_for_washing_machine: boolean;
	is_prioritizing_company_customers: boolean;
	has_dishwasher: boolean;
	is_prepared_for_dishwasher: boolean;
	has_drier: boolean;
	has_bathtub: boolean;
	has_shower: boolean;
	has_kitchen_fan: boolean;
	has_patio: boolean;
	has_balcony: boolean;
	has_elevator: boolean;
	has_parking: boolean;
	parking: string;
	has_garage: boolean;
	garage: string;
	city: string;
	street: string;
	street_number: string;
	zip_code: string;
	municipality: string;
	county: string;
	rooms: string;
	get_rooms: string;
	floor: number;
	area: string;
	rent: number;
	description?: string;
	status: string;
	promotion_file: null | string;
	plan_image: null | string;
	images: Image[];
	videos: [];
	three_d_views: [];
	agreement_access: boolean;
	prior_access: boolean;
	landlord_logo: string;
	landlord_company: string;
	public_profile_slug: null | string;
	date_access: string;
	can_apply: boolean;
	longitude: string;
	latitude: string;
	date_publish: string;
	new_production: boolean;
	estate_id: number | string;
	area_description: string;
	landlord_object_id: string;
	has_applied_on_estate: boolean;
	is_short_lease: boolean;
	security_door: boolean;
	short_lease_min_date: null | string;
	short_lease_max_date: null | string;
	contract_system: string;
	is_senior: boolean;
	capacity: number;
	senior_age: number;
	is_youth: boolean;
	youth_age: number;
	is_student: boolean;
	allows_smoking: boolean;
	allows_pets: boolean;
	candidate_sorting_mode: string;
	handicap_friendly: boolean;
	last_accept: number;
	office: {
		id: number;
	};
	landlord: {
		id: number;
	};
	early_access: EarlyAccess;
}

export interface Listing {
	id: number;
	references: {
		estate: number;
		apartment: number;
		object_ad: number;
		company: number;
		office: number;
		project: number | null;
	};
	type: string;
	uri: string;
	municipality: string;
	county: string;
	city: string;
	location: Location;
	images: Image[];
	videos: [];
	boost_value: number;
	title: string;
	audience: string;
	is_short_lease: boolean;
	early_access: EarlyAccess;
	rent: number;
	rooms: number;
	area: number;
	date_access: string;
	object_ad: ObjectAdDetails;
}

export interface ListingsJson {
	results: Listing[];
}
