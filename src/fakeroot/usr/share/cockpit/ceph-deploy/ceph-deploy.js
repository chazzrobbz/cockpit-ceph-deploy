/*
    Cockpit Ceph Deploy - A cockpit module for configuring ceph using 45drives Ansible Playbooks.
    Copyright (C) 2021 Mark Hooper <mhooper@45drives.com>
    
    This file is part of Cockpit Ceph Deploy.
    Cockpit Ceph Deploy is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    Cockpit Ceph Deploy is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Cockpit Ceph Deploy.  If not, see <https://www.gnu.org/licenses/>.
*/

let g_core_params = null;
let g_deploy_file = null;


function show_snackbar_msg(msg_label,msg_content,msg_color,id) {
	var snackbar = document.getElementById(id);
	if(snackbar != null){
		snackbar.innerHTML = msg_label + msg_content;
		snackbar.style.backgroundColor = msg_color;
		snackbar.className = "show";
		setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
	}
  } 

  function set_last_theme_state() {
	var toggle_switch = document.getElementById("toggle-theme");
	var state = localStorage.getItem("houston-theme-state");
	var icon = document.getElementById("houston-theme-icon");
	//var logo = document.getElementById("logo-45d");
	if (state === "light") {
		toggle_switch.checked = false;
		document.documentElement.setAttribute("data-theme", "light");
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
		//logo.src = "branding/logo-light.svg";
	} else if (state === "dark") {
		toggle_switch.checked = true;
		document.documentElement.setAttribute("data-theme", "dark");
		icon.classList.remove("fa-sun");
		icon.classList.add("fa-moon");
		//logo.src = "branding/logo-dark.svg";
	} else {
		toggle_switch.checked = false;
		state = "light";
		localStorage.setItem("houston-theme-state", state);
		//logo.src = "branding/logo-light.svg";
	}
}

function switch_theme(/*event*/ e) {
	var icon = document.getElementById("houston-theme-icon");
	//var logo = document.getElementById("logo-45d");
	var state = "";
	if (e.target.checked) {
		state = "dark";
		icon.classList.remove("fa-sun");
		icon.classList.add("fa-moon");
		//logo.src = "branding/logo-dark.svg";
	} else {
		state = "light";
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
		//logo.src = "branding/logo-light.svg";
	}
	document.documentElement.setAttribute("data-theme", state);
	localStorage.setItem("houston-theme-state", state);
}


function add_host_request(){
	let hostname = document.getElementById("new-hostname-field").value;
	let monitor_interface = document.getElementById("new-interface-field").value;
	//let ip = document.getElementById("new-ip-field").value;
	if(hostname != null && hostname != ""){
		host_request_json = {[hostname]:{"hostname":""}};
		host_request_json[hostname]["hostname"] = hostname;
		//host_request_json[hostname]["ip"] = (ip != null) ? ip:"";
		host_request_json[hostname]["monitor_interface"] = (monitor_interface != null) ? monitor_interface:"";
		var spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/core_params","-h",JSON.stringify(host_request_json),"-w"];
		var result_json = null;
		var proc = cockpit.spawn(spawn_args, {superuser: "require"});
		proc.done(function(data) {
			var msg_label = "";
			var msg_content = "";
			var msg_color = "";
			try {
				result_json = JSON.parse(data);
			} catch (e) {
				msg_color = "#bd3030";
				msg_label = "Error:";
				msg_content = "Unexpected return value.";
			}
			if (result_json.hasOwnProperty("success_msg")){
				msg_color = "#20a030";
				msg_label = "Add Host: ";
				msg_content = "Host Added Succcessfully.";
			}else{
				msg_color = "#bd3030";
				msg_label = "Error:";
				msg_content = "Unexpected return value.";
			}
			hide_modal_dialog("add-host-modal");
			get_param_file_content();
			show_snackbar_msg(msg_label,msg_content,msg_color,"add-host-snackbar");
		});
		proc.fail(function(ex, data) {
			document.getElementById("add-host-result-msg").style.display = "block";
			var msg_label = document.getElementById("add-host-result-msg-label");
			msg_label.innerHTML = "Error:";
			var msg_content = document.getElementById("add-host-result-msg-content");
			try {
				result_json = JSON.parse(data);
			} catch (e) {
				msg_content.innerHTML = "Unable to add host";
			}
			if (result_json.hasOwnProperty("error_msg")){
				msg_content.innerHTML = result_json.error_msg;
			}else{
				msg_content.innerHTML = "Unable to add host";
			}
		});
	}
	else{
		return false;
	}

}

function add_host(){
	document.getElementById("add-host-modal-title").innerText = "Add New Host";
	
	let hostname_field = document.getElementById("new-hostname-field");
	//let ip_field = document.getElementById("new-ip-field");
	let interface_field = document.getElementById("new-interface-field");
	hostname_field.value = "";
	//ip_field.value = "";
	interface_field.value = "";

    show_modal_dialog("add-host-modal");
	hostname_field.addEventListener("input",function(){
		check_name_field("new-hostname-field","new-hostname-field-feedback","continue-add-host","hostname",true)});
	//ip_field.addEventListener("input",function(){
	//	check_ip_field("new-ip-field","new-ip-field-feedback","continue-add-host","ip",false)});
	interface_field.addEventListener("input",function(){
		check_name_field("new-interface-field","new-interface-field-feedback","continue-add-host","monitor_interface",false)});

    document.getElementById("close-add-host").addEventListener("click",function(){ hide_modal_dialog("add-host-modal"); });
    document.getElementById("cancel-add-host").addEventListener("click",function(){ hide_modal_dialog("add-host-modal"); });
    document.getElementById("continue-add-host").addEventListener("click",add_host_request);
	document.getElementById("continue-add-host").innerText = "Add";
}

function check_name_field(name_field_id,feedback_field_id,button_id,label_name,required_flag) {
	var field_text = document.getElementById(name_field_id).value;
	var button = document.getElementById(button_id);
	var info_message = document.getElementById(feedback_field_id);
	info_message.innerText = " ";
	if(field_text.length === 0 && required_flag){
		button.disabled = true;
		info_message.innerText = label_name + " cannot be empty.";
		return false;
	}else if(field_text.length > 0 && !field_text.match(/^[a-z_][a-z0-9_-]*[$]?$/)){
		button.disabled = true;
		var invalid_chars = [];
		if(field_text[0].match(/[^a-z_]/))
			invalid_chars.push("'"+field_text[0]+"'");
		for(let char of field_text.slice(1,-1))
			if(char.match(/[^a-z0-9_-]/))
				invalid_chars.push("'"+char+"'");
		if(field_text[field_text.length - 1].match(/[^a-z0-9_\-$]/))
			invalid_chars.push("'"+field_text[field_text.length - 1]+"'");
		info_message.innerText = label_name + " contains invalid characters: \n" + invalid_chars.join(", ");
		return false;
	}
	button.disabled = false;
	return true;
}

function check_ip_field(field_id,feedback_field_id,button_id,label_name,required_flag) {
	var ip_string = document.getElementById(field_id).value;
	var button = document.getElementById(button_id);
	var info_message = document.getElementById(feedback_field_id);
	info_message.innerText = " ";
	if(ip_string.length === 0 && required_flag){
		button.disabled = true;
		info_message.innerText = label_name + " cannot be empty.";
		return false;
	}else if(ip_string.length > 0 && !validate_ip_address(ip_string)){
		info_message.innerText = label_name + " invalid ip format.";
		button.disabled = true;
		return false;
	}
	button.disabled = false;
	return true;
}

function validate_ip_address(ipaddress) {  
	let ipv6 = /^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:)))(%.+)?((\/){1}(1?2?[0-8]|1?[0-1][0-9]|[1-9]?[0-9]))?\s*$/.test(ipaddress);
	let ipv4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((\/){1}([1-2]?[0-9]|3[0-2]))?$/.test(ipaddress);
	return (ipv4 || ipv6)
}  

function show_modal_dialog(id){
    var modal = document.getElementById(id);
	modal.style.display = "block";
}

function hide_modal_dialog(id) {
	var modal = document.getElementById(id);
	modal.style.display = "none";
	document.getElementById("add-host-result-msg").style.display = "none";
	document.getElementById("new-hostname-field").value = "";
}

function update_role_info(hosts_json,roles_json){
	//clear out the role-div element
	let role_div = document.getElementById("role-div");
	if(role_div != null){role_div.innerHTML = "";}

	//create the new role table
	let role_table = document.createElement("table");
	role_table.classList.add("role-table");
	role_table.id = "role-table";

	//create a blank th entry to start then create a header for each role
	let role_table_header_row = document.createElement("tr");
	role_table_header_row.classList.add("cd-table-header-row");
	role_table_header_row.appendChild(document.createElement("th"));
	for (let key of Object.keys(roles_json)){
		let th = document.createElement("th");
		th.innerText = key;
		role_table_header_row.appendChild(th);
	}
	role_table.appendChild(role_table_header_row); //add header row to table

	//create a new row for each host
	for (let host_key of Object.keys(hosts_json)) {
		let role_table_host_row = document.createElement("tr");
		role_table_host_row.id = "role-table-host-row-" + host_key; // eg: id="role-table-host-row-hostname1"
		role_table_host_row.classList.add("role-table-host-row");
		let role_table_host_name = document.createElement("td");
		role_table_host_name.innerText = host_key;
		role_table_host_row.appendChild(role_table_host_name);
		for (let role_key of Object.keys(roles_json)){
			//create a cell and checkbox for each role.
			let role_checkbox_td = document.createElement("td");
			let role_checkbox = document.createElement("input");
			role_checkbox.type = "checkbox";
			role_checkbox.classList.add("cd-checkbox");
			role_checkbox.id = role_key + "-" + host_key + "-checkbox"; //eg "osds-hostname1-checkbox"
			if(roles_json[role_key].includes(host_key)){
				// ensure that checkbox is pre-checked if hostname is found in role list.
				role_checkbox.checked = true; 
			}
			role_checkbox.addEventListener("change",function(){
			document.getElementById("update-roles-btn").removeAttribute("disabled")});
			role_checkbox_td.appendChild(role_checkbox);
			role_table_host_row.appendChild(role_checkbox_td);
		}
		role_table.appendChild(role_table_host_row); // add row to table
	}
	role_div.appendChild(role_table); // add table to div
	document.getElementById("update-roles-btn").disabled = true; // diable the update roles button
	let role_content = document.getElementById("role-content");
	let placeholder = document.getElementById("cd-role-placeholder");
	if(role_content && placeholder){
		if(role_table.getElementsByTagName('tr').length === 1){ 
			role_content.classList.add("hidden");
			placeholder.classList.remove("hidden");
		}
		else{
			role_content.classList.remove("hidden");
			placeholder.classList.add("hidden");
		}
	}
}

function update_options_info(options_json){
	let monitor_interface_field = document.getElementById("options-interface-field");
	let cluster_network_field = document.getElementById("options-cluster-network-field");
	let public_network_field = document.getElementById("options-public-network-field");
	let hybrid_cluster_checkbox = document.getElementById("options-hybrid-cluster-checkbox");

	document.getElementById("global-options-btn").disabled = true;

	if(monitor_interface_field && cluster_network_field && public_network_field && hybrid_cluster_checkbox){
		monitor_interface_field.value = options_json["monitor_interface"];
		cluster_network_field.value = options_json["cluster_network"];
		public_network_field.value = options_json["public_network"];
		hybrid_cluster_checkbox.checked = options_json["hybrid_cluster"];

		cluster_network_field.addEventListener("input",function(){
			check_ip_field("options-cluster-network-field","options-cluster-network-field-feedback","global-options-btn","cluster_network",false)});

		public_network_field.addEventListener("input",function(){
			check_ip_field("options-public-network-field","options-public-network-field-feedback","global-options-btn","public_network",true)});
		
		monitor_interface_field.addEventListener("input",function(){
			check_name_field("options-interface-field","options-interface-field-feedback","global-options-btn","monitor_interface",true)});

		hybrid_cluster_checkbox.addEventListener("change",function(){
			document.getElementById("global-options-btn").removeAttribute("disabled")});

		//enable/disable next nav button.
		let next_btn = document.getElementById("ansible-config-add-options-nxt");
		if(monitor_interface_field.value && public_network_field.value && next_btn){
			next_btn.removeAttribute("disabled");
			next_btn.title = "To proceed, fill in required fields.";
		}else if(next_btn){
			next_btn.disabled = true;
			next_btn.title = "";
		}
	}
}

function get_param_file_content(){
	var core_params = null;
	var spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/core_params","-s"];
	var result_json = null;
	var proc = cockpit.spawn(spawn_args, {superuser: "require"});
	proc.done(function(data) {
		var msg_label = "";
		var msg_content = "";
		var msg_color = "";
		try {
			result_json = JSON.parse(data);
		} catch (e) {
			msg_color = "#bd3030";
			msg_label = "Error:";
			msg_content = "Unexpected return value.";
		}
		if (result_json.hasOwnProperty("success_msg")){
			msg_color = "#20a030";
			msg_label = "Message: ";
			msg_content = result_json.success_msg;
			if(result_json.hasOwnProperty("old_file_content")){
				update_host_info(result_json.old_file_content.hosts);
				update_role_info(result_json.old_file_content.hosts, result_json.old_file_content.roles);
				update_options_info(result_json.old_file_content.options);
				core_params = result_json.old_file_content;
			}
		}else{
			msg_color = "#bd3030";
			msg_label = "Error:";
			msg_content = "Unexpected return value.";
		}
		hide_modal_dialog("add-host-modal");
		show_snackbar_msg(msg_label,msg_content,msg_color,"snackbar");
	});
	proc.fail(function(ex, data) {
		var msg_color = "#bd3030";
		var msg_label = "Error:";
		var msg_content = "Unable to load parameter file.";
		show_snackbar_msg(msg_label,msg_content,msg_color,"snackbar");
	});
}

function remove_host(hostname){
	host_request_json = {[hostname]:{"hostname":{}}};
		host_request_json[hostname]["hostname"] = hostname;
		var spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/core_params","-h",JSON.stringify(host_request_json),"-x"];
		var result_json = null;
		var proc = cockpit.spawn(spawn_args, {superuser: "require"});
		proc.done(function(data) {
			var msg_label = "";
			var msg_content = "";
			var msg_color = "";
			try {
				result_json = JSON.parse(data);
			} catch (e) {
				msg_color = "#bd3030";
				msg_label = "Error:";
				msg_content = "Unexpected return value.";
			}
			if (result_json.hasOwnProperty("success_msg")){
				msg_color = "#20a030";
				msg_label = "Remove Host: ";
				msg_content = result_json.success_msg;
			}else{
				msg_color = "#bd3030";
				msg_label = "Error:";
				msg_content = "Unexpected return value.";
			}
			get_param_file_content();
			show_snackbar_msg(msg_label,msg_content,msg_color,"add-host-snackbar");
		});
		proc.fail(function(ex, data) {
			var msg_label = "Error: ";
			var msg_content = ""
			var msg_color = "#bd3030";
			try {
				result_json = JSON.parse(data);
			} catch (e) {
				msg_content = "Unable to remove host";
			}
			if (result_json.hasOwnProperty("error_msg")){
				msg_content = result_json.error_msg;
			}else{
				msg_content = "Unable to remove host";
			}
			show_snackbar_msg(msg_label,msg_content,msg_color,"add-host-snackbar");
		});
}

function edit_host(hostname,monitor_interface){
	document.getElementById("add-host-modal-title").innerText = "Edit Host";
	
	let hostname_field = document.getElementById("new-hostname-field");
	//let ip_field = document.getElementById("new-ip-field");
	let interface_field = document.getElementById("new-interface-field");
	
	hostname_field.value = hostname;
	//ip_field.value = ip;
	interface_field.value = monitor_interface;

	show_modal_dialog("add-host-modal");
	hostname_field.addEventListener("input",function(){
		check_name_field("new-hostname-field","new-hostname-field-feedback","continue-add-host","hostname",true)});
	//ip_field.addEventListener("input",function(){
	//	check_ip_field("new-ip-field","new-ip-field-feedback","continue-add-host","ip",false)});
	interface_field.addEventListener("input",function(){
		check_name_field("new-interface-field","new-interface-field-feedback","continue-add-host","monitor_interface",false)});

	document.getElementById("close-add-host").addEventListener("click",function(){ hide_modal_dialog("add-host-modal"); });
	document.getElementById("cancel-add-host").addEventListener("click",function(){ hide_modal_dialog("add-host-modal"); });
	document.getElementById("continue-add-host").addEventListener("click",add_host_request);
	document.getElementById("continue-add-host").innerText = "Save";
}

function update_host_info(hosts_json){
	let host_list = document.getElementById("cd-host-list");
	while (host_list.hasChildNodes()) {  
		host_list.removeChild(host_list.firstChild);
	}
	localStorage.setItem("core_params_hosts",hosts_json);
	if(Object.keys(hosts_json).length > 0){
		document.getElementById("ansible-config-hosts-and-roles-nxt").removeAttribute("disabled");
		document.getElementById("cd-host-box").classList.remove("hidden");
		document.getElementById("cd-host-placeholder").classList.add("hidden");
		for (let key of Object.keys(hosts_json)) {
			let hostname = hosts_json[key]["hostname"];
			//let ip = hosts_json[key]["ip"];
			let monitor_interface = hosts_json[key]["monitor_interface"];
			
			var new_host_entry = document.createElement("div");
			new_host_entry.classList.add("cd-host-list-entry");

			var host_entry_hostname = document.createElement("div");
			host_entry_hostname.classList.add("cd-host-list-entry-text");
			host_entry_hostname.innerText = hostname;

			//var host_entry_ip = document.createElement("div");
			//host_entry_ip.classList.add("cd-host-list-entry-text");
			//host_entry_ip.innerText = ip;

			var host_entry_monitor_interface = document.createElement("div");
			host_entry_monitor_interface.classList.add("cd-host-list-entry-text");
			host_entry_monitor_interface.innerText = monitor_interface;

			var host_entry_edit_icon = document.createElement("div");
			host_entry_edit_icon.classList.add("cd-host-list-entry-icon","fa","fa-gear");

			host_entry_edit_icon.addEventListener("click", function(){
				let hns = hostname.valueOf();
				//let ips = ip.valueOf();
				let mis = monitor_interface.valueOf();
				edit_host(hns,mis);
			});

			var host_entry_delete_icon = document.createElement("div");
			host_entry_delete_icon.classList.add("cd-host-list-entry-icon-del","fa","fa-times");
			host_entry_delete_icon.addEventListener("click", function(){let arg = hostname.valueOf();remove_host(arg)});

			new_host_entry.appendChild(host_entry_hostname);
			//new_host_entry.appendChild(host_entry_ip);
			new_host_entry.appendChild(host_entry_monitor_interface);
			new_host_entry.appendChild(host_entry_edit_icon);
			new_host_entry.appendChild(host_entry_delete_icon);

			host_list.appendChild(new_host_entry);
		}
	}else{
		document.getElementById("cd-host-box").classList.add("hidden");
		document.getElementById("cd-host-placeholder").classList.remove("hidden");
		document.getElementById("ansible-config-hosts-and-roles-nxt").disabled = true;
	}
}

function hide_step_content(step){
	let id_string = "step-" + step.toString();
	let step_content = document.getElementById(id_string);
	if(step_content != null){step_content.classList.add("hidden");}
}

function show_step_content(step){
	let id_string = "step-" + step.toString();
	let step_content = document.getElementById(id_string);
	if(step_content != null){step_content.classList.remove("hidden");}
}

function update_role_request(){

	// we can update the roles assigned to each host by performing two subsequent requests.
	// we can remove any unchecked roles first, then we can add in all of the checked roles.

	let role_request_template = {
        "mons": [],
        "mgrs": [],
        "osds": [],
        "metrics": [],
        "mdss": [],
        "smbs": [],
        "nfss": [],
        "iscsigws": [],
        "rgws": [],
        "rgwloadbalancers": [],
        "client": []
	}

	let add_role_request_json = {
        "mons": [],
        "mgrs": [],
        "osds": [],
        "metrics": [],
        "mdss": [],
        "smbs": [],
        "nfss": [],
        "iscsigws": [],
        "rgws": [],
        "rgwloadbalancers": [],
        "client": []
	}

	let remove_role_request_json = {
        "mons": [],
        "mgrs": [],
        "osds": [],
        "metrics": [],
        "mdss": [],
        "smbs": [],
        "nfss": [],
        "iscsigws": [],
        "rgws": [],
        "rgwloadbalancers": [],
        "client": []
	}

	//look through the role table and determine the state of each checkbox. 
	let role_table_host_rows = document.getElementsByClassName("role-table-host-row");
	for(let i = 0; i<role_table_host_rows.length; i++){
		// get the hostname from the id string of the tr element.
		let hostname = role_table_host_rows[i].id.substring("role-table-host-row-".length);
		for (let role_key of Object.keys(role_request_template)) {
			//construct the id string of the checkbox: example "mons-hostname1-checkbox"
			let checkbox_id_string = role_key + "-" + hostname + "-checkbox";
			let role_checkbox = document.getElementById(checkbox_id_string);
			if(role_checkbox != null){
				if(role_checkbox.checked){
					// The checkbox is checked, add the hostname to the add_role_request
					add_role_request_json[role_key].push(hostname);
				}else{
					// The checkbox is not checked, add the hostname to the remove_role_request
					remove_role_request_json[role_key].push(hostname);
				}
			}
		}
	}

	// perform the remove request first
	var remove_spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/core_params","-r",JSON.stringify(remove_role_request_json),"-x"];
	var remove_result_json = null;
	var remove_role_proc = cockpit.spawn(remove_spawn_args, {superuser: "require"});
	remove_role_proc.done(function(data) {
		// removal was successful, now perform the add role request.
		var add_spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/core_params","-r",JSON.stringify(add_role_request_json),"-w"];
		var add_result_json = null;
		var add_role_proc = cockpit.spawn(add_spawn_args, {superuser: "require"});
		add_role_proc.done(function(data) {
			show_snackbar_msg("Message: ","Roles have been updated.", "#20a030","update-roles-snackbar");
			get_param_file_content();
		});
		add_role_proc.fail(function(ex, data) {
			console.log("add_role_proc (FAIL): ",data);
			show_snackbar_msg("Error: ","Failed to add role(s)","#bd3030","update-roles-snackbar");
		});
	});
	remove_role_proc.fail(function(ex, data) {
		console.log("remove_role_proc (FAIL): ",data);
		show_snackbar_msg("Error: ","Failed to remove role(s)","#bd3030","update-roles-snackbar");
	});
}

function update_options_request(){
	let options_request_json = {
		"monitor_interface": document.getElementById("options-interface-field").value,
		"cluster_network": document.getElementById("options-cluster-network-field").value,
		"public_network": document.getElementById("options-public-network-field").value,
		"hybrid_cluster": document.getElementById("options-hybrid-cluster-checkbox").checked
	};
	if (options_request_json["hybrid_cluster"] === null){options_request_json["hybrid_cluster"] = false;}
	var spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/core_params","-o",JSON.stringify(options_request_json),"-w"];
	var result_json = null;
	var options_proc = cockpit.spawn(spawn_args, {superuser: "require"});
	options_proc.done(function(data){
		show_snackbar_msg("Message: ","Global options have been updated", "#20a030","update-options-snackbar");
		get_param_file_content();
	});
	options_proc.fail(function(ex, data) {
		console.log("options_proc (FAIL): ",data);
		show_snackbar_msg("Error: ","Failed to modify global options","#bd3030","update-roles-snackbar");
	});
}

function show_all_file(){
	let all_file_content = document.getElementById("all-file-content");
	let show_button = document.getElementById("show-all-file-btn");
	if(all_file_content && all_file_content.classList.contains("hidden")){
		all_file_content.classList.remove("hidden");
		show_button.innerHTML = '<i class="fas fa-eye-slash"></i>';
	}else{
		all_file_content.classList.add("hidden");
		show_button.innerHTML = '<i class="fas fa-eye"></i>';
	}
}

function show_host_file(){
	let host_file_content = document.getElementById("host-file-content");
	let show_button = document.getElementById("show-host-file-btn");
	if(host_file_content && host_file_content.classList.contains("hidden")){
		host_file_content.classList.remove("hidden");
		show_button.innerHTML = '<i class="fas fa-eye-slash"></i>';
	}else{
		host_file_content.classList.add("hidden");
		show_button.innerHTML = '<i class="fas fa-eye"></i>';
	}
}

function generate_host_file(){
	var spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/make_hosts"];
	var result_json = null;
	var generate_host_file_proc = cockpit.spawn(spawn_args, {superuser: "require"});
	generate_host_file_proc.done(function(data){
		let msg_color = "";
		let msg_label = "";
		let msg_content = "";
		try {
			result_json = JSON.parse(data);
		} catch (e) {
			msg_color = "#bd3030";
			msg_label = "Error:";
			msg_content = "Unexpected return value.";
		}
		if (result_json.hasOwnProperty("success_msg")){
			msg_color = "#20a030";
			msg_label = "Message: ";
			msg_content = result_json.success_msg;
			var host_file_content_proc = cockpit.spawn(["cat",result_json.path],{superuser:"require"});
			host_file_content_proc.done(function(data){
				document.getElementById("host-file-content").innerText = data;
				document.getElementById("host-file-content").classList.remove("hidden");
				localStorage.setItem("hosts",data);
				let show_button = document.getElementById("show-host-file-btn");
				show_button.innerHTML = '<i class="fas fa-eye-slash"></i>';
				show_button.classList.remove("hidden");
				show_button.addEventListener("click",show_host_file);
				document.getElementById("generate-host-file-btn").innerHTML = "Generate Again";
				document.getElementById("inv-file-hosts-default").classList.add("hidden");
				document.getElementById("ansible-config-inv-hosts-nxt").removeAttribute("disabled");
			});
			host_file_content_proc.fail(function(ex,data){
				console.log("host_file_content_proc (FAIL): ",data);
			});
		}else{
			msg_color = "#bd3030";
			msg_label = "Error:";
			msg_content = "Unexpected return value.";
		}
		show_snackbar_msg(msg_label,msg_content,msg_color,"snackbar");
	});
}

function generate_all_file(){
	var spawn_args = ["/usr/share/cockpit/ceph-deploy/helper_scripts/make_all"];
	var result_json = null;
	var generate_all_file_proc = cockpit.spawn(spawn_args, {superuser: "require"});
	generate_all_file_proc.done(function(data){
		let msg_color = "";
		let msg_label = "";
		let msg_content = "";
		try {
			result_json = JSON.parse(data);
		} catch (e) {
			msg_color = "#bd3030";
			msg_label = "Error:";
			msg_content = "Unexpected return value.";
		}
		if (result_json.hasOwnProperty("success_msg")){
			msg_color = "#20a030";
			msg_label = "Message: ";
			msg_content = result_json.success_msg;
			var all_file_content_proc = cockpit.spawn(["cat",result_json.path],{superuser:"require"});
			all_file_content_proc.done(function(data){
				document.getElementById("all-file-content").innerText = data;
				document.getElementById("all-file-content").classList.remove("hidden");
				localStorage.setItem("all.yml",data);
				let show_button = document.getElementById("show-all-file-btn");
				show_button.innerHTML = '<i class="fas fa-eye-slash"></i>';
				show_button.classList.remove("hidden");
				show_button.addEventListener("click",show_all_file);
				document.getElementById("generate-all-file-btn").innerHTML = "Generate Again";
				document.getElementById("inv-file-all-default").classList.add("hidden");
				document.getElementById("ansible-config-inv-all-nxt").removeAttribute("disabled");

			});
			all_file_content_proc.fail(function(ex,data){
				console.log("all_file_content_proc (FAIL): ",data);
			});
		}else{
			msg_color = "#bd3030";
			msg_label = "Error:";
			msg_content = "Unexpected return value.";
		}
		show_snackbar_msg(msg_label,msg_content,msg_color,"snackbar");
	});
}

function makeTerminal(termID){
	let term = document.createElement("iframe");
	term.setAttribute("width","100%");
	term.setAttribute("height","500px");
	term.id=termID;
	term.title="Terminal";
	term.src="terminal.html";
	return term;
}

function update_deploy_state(content){
	let prev_state_json_str = (localStorage.getItem("deploy_state")??"{}");
	let prev_state_json = JSON.parse(prev_state_json_str);
	if(content && prev_state_json != content){
		localStorage.setItem("deploy_state",JSON.stringify(content));
		Object.entries(content).forEach(([playbook, obj]) => {
			let done_button = document.getElementById(playbook);
			if(done_button && content.hasOwnProperty(playbook) && content[playbook].result === 0){
				done_button.removeAttribute("disabled");
			}else if (done_button && content.hasOwnProperty(playbook)){
				done_button.disabled = true;
			}
		});
	}
}

function monitor_deploy_state(){
	g_deploy_file = cockpit.file("/usr/share/cockpit/ceph-deploy/state/deploy_state.json", { syntax: JSON });
	g_deploy_file.watch(function(content){update_deploy_state(content);});
}

function ansible_ping(){
	localStorage.setItem("terminal-command","ansible_runner -c ping_all\n");
	let ping_term = document.getElementById("terminal-ping");
	if(!ping_term){ping_term = makeTerminal("terminal-ping");}
	document.getElementById("terminal-ping-iframe").appendChild(ping_term);
}

function ansible_device_alias(){
	localStorage.setItem("terminal-command","ansible_runner -c device_alias\n");
	let device_alias_term = document.getElementById("terminal-device-alias");
	if(!device_alias_term){device_alias_term = makeTerminal("terminal-device-alias");}
	document.getElementById("terminal-device-alias-iframe").appendChild(device_alias_term);
}

function ansible_core(){
	localStorage.setItem("terminal-command","ansible_runner -c deploy_core\n");
	let core_term = document.getElementById("terminal-core");
	if(!core_term){core_term = makeTerminal("terminal-core");}
	document.getElementById("terminal-core-iframe").appendChild(core_term);
}

function toggle_panel_body_visibility(btn_id,pb_id){
	let pb = document.getElementById(pb_id);
	let btn = document.getElementById(btn_id);
	if(pb && btn){
		if(pb.classList.contains("hidden")){
			pb.classList.remove("hidden");
			btn.classList.remove("fa-angle-down");
			btn.classList.add("fa-angle-up");
		}else{
			pb.classList.add("hidden");
			btn.classList.remove("fa-angle-up");
			btn.classList.add("fa-angle-down");
		}
	}
}

function setup_panel_vis_toggle_buttons(){
	let vis_toggle_buttons = document.getElementsByClassName("cd-panel-vis-toggle");
	for(let i=0; i<vis_toggle_buttons.length; i++){
		let target_content_id = vis_toggle_buttons[i].getAttribute("for");
		let target_content_obj = document.getElementById(target_content_id);
		let btn_id = vis_toggle_buttons[i].id;
		if(target_content_id && target_content_obj && btn_id){
			vis_toggle_buttons[i].addEventListener(
				"click",() => {toggle_panel_body_visibility(btn_id,target_content_id);});
		}
	}
}

function setup_deploy_step_start_buttons(){
	let start_buttons = document.getElementsByClassName("cd-deploy-step-start-btn");
	for(let i = 0; i < start_buttons.length; i++){
		let target_div = start_buttons[i].getAttribute("for");
		start_buttons[i].addEventListener("click",()=>{
			document.getElementById("cd-main-menu").classList.add("hidden");
			document.getElementById(target_div).classList.remove("hidden");
		});
	}
}

function setup_top_nav_buttons(){
	let main_menu_links = document.getElementsByClassName("progress-bar-main-back");
	if(main_menu_links){
		for(let i = 0; i < main_menu_links.length; i++){
			main_menu_links[i].addEventListener("click",()=>{
				let step_content_ids = [
					"step-preconfig",
					"step-ansible-config",
					"step-core",
					"step-cephfs",
					"step-nfs",
					"step-smb",
					"step-rgw",
					"step-rgwlb",
					"step-iscsi",
					"step-dashboard"
				];
	
				for(let i = 0; i < step_content_ids.length; i++){
					let content = document.getElementById(step_content_ids[i]);
					if(content){
						content.classList.add("hidden");
					}
				}
				
				let main_menu_content = document.getElementById("cd-main-menu");
				if(main_menu_content){main_menu_content.classList.remove("hidden");}
			});
		}
	}
}

function setup_deploy_step_nav_buttons(){
	let done_buttons = document.getElementsByClassName("cd-deploy-step-done-btn");
	if(done_buttons){
		for(let i = 0; i < done_buttons.length; i++){
			let step_content_id = done_buttons[i].getAttribute("for");
			if(step_content_id){
				let step_content = document.getElementById(step_content_id);
				if(step_content){
					let deploy_step_id = step_content.getAttribute("for");
					if(deploy_step_id){
						done_buttons[i].addEventListener("click", () => {
							localStorage.setItem(deploy_step_id,"complete");
							step_content.classList.add("hidden");
							document.getElementById("cd-main-menu").classList.remove("hidden");
							setup_main_menu();
						});
					}
				}
			}
		}
	}

	let next_buttons = document.getElementsByClassName("cd-deploy-step-next-btn");
	if(next_buttons){
		for(let i = 0; i < next_buttons.length; i++){
			let step_content_id = next_buttons[i].getAttribute("for");
			if(step_content_id){
				next_buttons[i].addEventListener("click",()=>{
					console.log(step_content_id);
					let step_progress = localStorage.getItem(step_content_id+"-progress")??"0";
					step_progress++;
					localStorage.setItem(step_content_id+"-progress",String(step_progress));
					setup_progress_bar(step_content_id);
				});
			}
		}
	}

	let prev_buttons = document.getElementsByClassName("cd-deploy-step-prev-btn");
	if(next_buttons){
		for(let i = 0; i < prev_buttons.length; i++){
			let step_content_id = prev_buttons[i].getAttribute("for");
			if(step_content_id){
				prev_buttons[i].addEventListener("click",()=>{
					let step_progress = Number(localStorage.getItem(step_content_id+"-progress")??"1");
					step_progress--;
					localStorage.setItem(step_content_id+"-progress",String(step_progress));
					setup_progress_bar(step_content_id);
				});
			}
		}
	}
}

function setup_progress_bar(step_id){
	let step_div = document.getElementById(step_id);
	let step_progress_key = step_id+"-progress";
	let step_progress = localStorage.getItem(step_progress_key)??"0";

	let progress_bar_steps = step_div.querySelectorAll(':scope [data-progress-bar-idx]');
	if(progress_bar_steps){
		for(let i = 0; i < progress_bar_steps.length; i++){
			if(progress_bar_steps[i].dataset.progressBarIdx === step_progress){
				progress_bar_steps[i].classList.add("progress-current-step");
				progress_bar_steps[i].classList.remove("progress-completed-step");
				let current_step_content = step_div.querySelector(`:scope [data-step-content-idx="${progress_bar_steps[i].dataset.progressBarIdx}"]`);
				if(current_step_content){ current_step_content.classList.remove("hidden")}
				localStorage.setItem(step_progress_key,progress_bar_steps[i].dataset.progressBarIdx);
			}else if(Number(progress_bar_steps[i].dataset.progressBarIdx) < Number(step_progress)){
				progress_bar_steps[i].classList.remove("progress-current-step");
				progress_bar_steps[i].classList.add("progress-completed-step");
				let completed_step_content = step_div.querySelector(`:scope [data-step-content-idx="${progress_bar_steps[i].dataset.progressBarIdx}"]`);
				if(completed_step_content){ completed_step_content.classList.add("hidden")}
			}else{
				progress_bar_steps[i].classList.remove("progress-current-step");
				progress_bar_steps[i].classList.remove("progress-completed-step");
				let next_step_content = step_div.querySelector(`:scope [data-step-content-idx="${progress_bar_steps[i].dataset.progressBarIdx}"]`);
				if(next_step_content){ next_step_content.classList.add("hidden")}
			}
		}
	}

	let prev_button = step_div.querySelector(':scope .cd-deploy-step-prev-btn');
	let next_button = step_div.querySelector(':scope .cd-deploy-step-next-btn');
	let done_button = step_div.querySelector(':scope .cd-deploy-step-done-btn');

	if(prev_button){
		if(step_progress === "0"){prev_button.disabled = true;}
		else{prev_button.removeAttribute("disabled");}
	}

	if(next_button){
		if(Number(step_progress) === progress_bar_steps.length -1 ){
			next_button.classList.add("hidden");
			if(done_button) done_button.classList.remove("hidden");
		}else{
			next_button.classList.remove("hidden");
			if(done_button) done_button.classList.add("hidden");
		}
	}
}


function setup_buttons(){
	setup_top_nav_buttons();
	setup_deploy_step_start_buttons();
	setup_panel_vis_toggle_buttons();
	setup_deploy_step_nav_buttons();
	setup_progress_bar("step-ansible-config");
	setup_progress_bar("step-core");
	setup_progress_bar("step-cephfs");
	setup_progress_bar("step-rgw");
	setup_progress_bar("step-iscsi");

}

function setup_main_menu(){
	let deploy_step_ids = [
		"deploy-step-preconfig",
		"deploy-step-ansible-config",
		"deploy-step-core",
		"deploy-step-cephfs",
		"deploy-step-nfs",
		"deploy-step-smb",
		"deploy-step-rgw",
		"deploy-step-rgwlb",
		"deploy-step-iscsi",
		"deploy-step-dashboard"
	];

	let deploy_step_default_states = {
		"deploy-step-preconfig" : "unlocked",
		"deploy-step-ansible-config" : "locked",
		"deploy-step-core" : "locked",
		"deploy-step-cephfs" : "locked",
		"deploy-step-nfs" : "locked",
		"deploy-step-smb" : "locked",
		"deploy-step-rgw" : "locked",
		"deploy-step-rgwlb" : "locked",
		"deploy-step-iscsi" : "locked",
		"deploy-step-dashboard" : "locked"
	};

	let deploy_step_current_states = {};

	let deploy_step_unlock_requirements = {
		"deploy-step-preconfig": [],
		"deploy-step-ansible-config": ["deploy-step-preconfig"],
		"deploy-step-core": ["deploy-step-ansible-config"],
		"deploy-step-cephfs": ["deploy-step-core"],
		"deploy-step-nfs": ["deploy-step-cephfs"],
		"deploy-step-smb": ["deploy-step-cephfs"],
		"deploy-step-rgw": ["deploy-step-core"],
		"deploy-step-rgwlb": ["deploy-step-rgw"],
		"deploy-step-iscsi": ["deploy-step-core"],
		"deploy-step-dashboard": ["deploy-step-rgw","deploy-step-iscsi","deploy-step-nfs","deploy-step-smb"]
	};

	// get states from local storage
	for(let i = 0; i < deploy_step_ids.length; i++){
		deploy_step_current_states[deploy_step_ids[i]] = (localStorage.getItem(deploy_step_ids[i])??deploy_step_default_states[deploy_step_ids[i]]);
	}

	// unlock the steps that have their unlock requirements met and update local storage.
	for(let i = 0; i < deploy_step_ids.length; i++){
		if(deploy_step_current_states[deploy_step_ids[i]] == "locked"){
			for(let j = 0; j < deploy_step_unlock_requirements[deploy_step_ids[i]].length; j++){
				if(deploy_step_current_states[deploy_step_unlock_requirements[deploy_step_ids[i]][j]] == "complete"){
					deploy_step_current_states[deploy_step_ids[i]] = "unlocked";
					break;
				}
			}
		}
		localStorage.setItem(deploy_step_ids[i],deploy_step_current_states[deploy_step_ids[i]]);
	}

	// update the appearance based on updated states
	for(let i = 0; i < deploy_step_ids.length; i++){
		let deploy_step_element = document.getElementById(deploy_step_ids[i]);
		
		if(deploy_step_element){
			let status_div = deploy_step_element.querySelector('.cd-step-status');
			let start_btn = deploy_step_element.querySelector('.cd-deploy-step-start-btn');
			if(deploy_step_current_states[deploy_step_ids[i]] == "complete"){
				deploy_step_element.classList.add("cd-step-complete");
				if(status_div && start_btn){ 
					status_div.innerHTML = '<i class="fas fa-check"></i>';
					status_div.title = "completed";
					start_btn.classList.remove("hidden");
					start_btn.title = "redo";
					start_btn.innerHTML = '<i class="fas fa-redo"></i>';
				}
			}else if(deploy_step_current_states[deploy_step_ids[i]] == "unlocked"){
				deploy_step_element.classList.remove("cd-step-complete");
				if(status_div && start_btn){ 
					status_div.innerHTML = '<i class="fas fa-lock-open"></i>';
					status_div.title = "ready";
					start_btn.classList.remove("hidden");
					start_btn.title = "start";
				}
			}else if(deploy_step_current_states[deploy_step_ids[i]] == "locked"){
				deploy_step_element.classList.remove("cd-step-complete");
				if(status_div && start_btn){ 
					status_div.innerHTML = '<i class="fas fa-lock"></i>';
					status_div.title = "locked: complete required steps to unlock.";
					start_btn.classList.add("hidden");
					start_btn.title = "start";
				}
			}
		}
	}
}

function main()
{
	let root_check = cockpit.permission({ admin: true });
	root_check.addEventListener(
		"changed", 
		function() {
			if(root_check.allowed){
				//user is an administrator, start the module as normal
                //setup on-click listeners for buttons as required.
				var current_step = Number(localStorage.getItem("current_step")??"0");

				setup_main_menu();
				setup_buttons();

				//show_step_content(current_step);
				get_param_file_content();
				g_deploy_file = cockpit.file("/usr/share/cockpit/ceph-deploy/state/deploy_state.json", { syntax: JSON });
				g_deploy_file.modify(function(old_content){if(!old_content){return {};}else{return old_content;}});
				monitor_deploy_state();
				deploy_state_json = (localStorage.getItem("deploy_state")??"{}");

				localStorage.setItem("deploy_state",deploy_state_json);
				deploy_state_obj = JSON.parse(deploy_state_json);

				let hosts = localStorage.getItem("hosts");
				let hosts_content = cockpit.file("/usr/share/ceph-ansible/hosts").read();
				hosts_content.then((content,tag) => {
					if(hosts && content && hosts == content){
						let host_file_file_div_content = document.getElementById("host-file-content");
						host_file_file_div_content.classList.remove("hidden");
						document.getElementById("host-file-content").innerHTML = content;
						let show_button = document.getElementById("show-host-file-btn");
						show_button.addEventListener("click",show_host_file);
						show_button.classList.remove("hidden");
						show_button.innerHTML = '<i class="fas fa-eye-slash"></i>';
						document.getElementById("generate-host-file-btn").innerHTML = "Generate Again";
						document.getElementById("inv-file-hosts-default").classList.add("hidden");
						document.getElementById("ansible-config-inv-hosts-nxt").removeAttribute("disabled");
					}else{
						document.getElementById("ansible-config-inv-hosts-nxt").disabled=true;
					}
				});


				let all_yml = localStorage.getItem("all.yml");
				let all_content = cockpit.file("/usr/share/ceph-ansible/group_vars/all.yml").read();
				all_content.then((content,tag) => {
					if(all_yml && content && all_yml == content){
						let all_file_div_content = document.getElementById("all-file-content")
						all_file_div_content.innerHTML = content;
						all_file_div_content.classList.remove("hidden");
						let show_button = document.getElementById("show-all-file-btn");
						show_button.addEventListener("click",show_all_file);
						show_button.classList.remove("hidden");
						show_button.innerHTML = '<i class="fas fa-eye-slash"></i>';
						document.getElementById("generate-all-file-btn").innerHTML = "Generate Again";
						document.getElementById("inv-file-all-default").classList.add("hidden");
						document.getElementById("ansible-config-inv-all-nxt").removeAttribute("disabled");
					}else{
						document.getElementById("ansible-config-inv-all-nxt").disabled=true;
					}
				});

				Object.entries(deploy_state_obj).forEach(([playbook, obj]) => {
					let done_button = document.getElementById(playbook);
					if(done_button && deploy_state_obj[playbook].result === 0){
						done_button.removeAttribute("disabled");
					}else if (done_button){
						done_button.disabled=true;
					}
        		});
				
				document.getElementById("new-host-btn").addEventListener("click",add_host);
				document.getElementById("update-roles-btn").addEventListener("click",update_role_request);
				document.getElementById("global-options-btn").addEventListener("click",update_options_request);
				document.getElementById("generate-host-file-btn").addEventListener("click",generate_host_file);
				document.getElementById("generate-all-file-btn").addEventListener("click",generate_all_file);
				document.getElementById("ansible-ping-btn").addEventListener("click",ansible_ping);
				document.getElementById("ansible-device-alias-btn").addEventListener("click",ansible_device_alias);
				document.getElementById("ansible-core-btn").addEventListener("click",ansible_core);
				document.getElementById("toggle-theme").addEventListener("change",switch_theme);
				
			}else{
				//user is not an administrator, inform them of this by
				//displaying a message on each tab page. 
				let page_content = document.getElementById("host_configuration_content");
				page_content.innerHTML = "";
				let user_msg = document.createElement("div");
				user_msg.className = "content_block_msg";
				user_msg.innerHTML = "You must be an administrator to use this feature.";
				page_content.appendChild(user_msg);
			}
	 	}
	);
}

main();

cockpit.transport.wait(function() { });