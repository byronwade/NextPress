import React from "react";
export default function OptionsGeneral() {
	return (
		<>
			<div id="wpbody-content">
				<div id="screen-meta" className="metabox-prefs">
					<div id="contextual-help-wrap" className="hidden" tabIndex={-1} aria-label="Contextual Help Tab">
						<div id="contextual-help-back" />
						<div id="contextual-help-columns">
							<div className="contextual-help-tabs">
								<ul>
									<li id="tab-link-overview" className="active">
										<a href="/" aria-controls="tab-panel-overview">
											Overview
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on General Settings</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>The fields on this screen determine some of the basics of your site setup.</p>
									<p>Most themes display the site title at the top of every page, in the title bar of the browser, and as the identifying name for syndicated feeds. The tagline is also displayed by many themes.</p>
									<p>The WordPress URL and the site URL can be the same (example.com) or different; for example, having the WordPress core files (example.com/wordpress) in a subdirectory instead of the root directory.</p>
									<p>If you want site visitors to be able to register themselves, as opposed to by the site administrator, check the membership box. A default user role can be set for all new users, whether self-registered or registered by the site admin.</p>
									<p>You can set the language, and the translation files will be automatically downloaded and installed (available if your filesystem is writable).</p>
									<p>UTC means Coordinated Universal Time.</p>
									<p>You must click the Save Changes button at the bottom of the screen for new settings to take effect.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="screen-meta-links">
					<div id="contextual-help-link-wrap" className="hide-if-no-js screen-meta-toggle">
						<button type="button" id="contextual-help-link" className="button show-settings" aria-controls="contextual-help-wrap" aria-expanded="false">
							Help
						</button>
					</div>
				</div>
				<div className="wrap">
					<h1>General Settings</h1>
					<form method="post" action="#" noValidate={true}>
						<input type="hidden" name="option_page" defaultValue="general" />
						<input type="hidden" name="action" defaultValue="update" />
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="7cec5083a4" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/options-general.php" />
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">
										<label htmlFor="blogname">Site Title</label>
									</th>
									<td>
										<input name="blogname" type="text" id="blogname" defaultValue="My WordPress" className="regular-text" />
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="blogdescription">Tagline</label>
									</th>
									<td>
										<input name="blogdescription" type="text" id="blogdescription" aria-describedby="tagline-description" defaultValue="" className="regular-text" placeholder="Just another WordPress site" />
										<p className="description" id="tagline-description">
											In a few words, explain what this site is about.
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="siteurl">WordPress Address (URL)</label>
									</th>
									<td>
										<input name="siteurl" type="url" id="siteurl" defaultValue="http://byronw34.sg-host.com" className="regular-text code" />
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="home">Site Address (URL)</label>
									</th>
									<td>
										<input name="home" type="url" id="home" aria-describedby="home-description" defaultValue="http://byronw34.sg-host.com" className="regular-text code" />
										<p className="description" id="home-description">
											Enter the address here if you <a href="/">want your site home page to be different from your WordPress installation directory</a>.
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="new_admin_email">Administration Email Address</label>
									</th>
									<td>
										<input name="new_admin_email" type="email" id="new_admin_email" aria-describedby="new-admin-email-description" defaultValue="bcw1995@gmail.com" className="regular-text ltr" />
										<p className="description" id="new-admin-email-description">
											This address is used for admin purposes. If you change this, an email will be sent to your new address to confirm it. <strong>The new address will not become active until confirmed.</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">Membership</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Membership</span>
											</legend>
											<label htmlFor="users_can_register">
												<input name="users_can_register" type="checkbox" id="users_can_register" defaultValue={1} />
												Anyone can register
											</label>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="default_role">New User Default Role</label>
									</th>
									<td>
										<select name="default_role" id="default_role">
											<option selected={true} value="subscriber">
												Subscriber
											</option>
											<option value="contributor">Contributor</option>
											<option value="author">Author</option>
											<option value="editor">Editor</option>
											<option value="administrator">Administrator</option>
										</select>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="WPLANG">
											Site Language
											<span className="dashicons dashicons-translation" aria-hidden="true" />
										</label>
									</th>
									<td>
										<select name="WPLANG" id="WPLANG">
											<optgroup label="Installed">
												<option value="" lang="en" data-installed={1} selected={true}>
													English (United States)
												</option>
											</optgroup>
											<optgroup label="Available">
												<option value="af" lang="af">
													Afrikaans
												</option>
												<option value="am" lang="am">
													????????????
												</option>
												<option value="arg" lang="an">
													Aragon??s
												</option>
												<option value="ar" lang="ar">
													??????????????
												</option>
												<option value="ary" lang="ar">
													?????????????? ????????????????
												</option>
												<option value="as" lang="as">
													?????????????????????
												</option>
												<option value="az" lang="az">
													Az??rbaycan dili
												</option>
												<option value="azb" lang="az">
													?????????? ??????????????????
												</option>
												<option value="bel" lang="be">
													???????????????????? ????????
												</option>
												<option value="bg_BG" lang="bg">
													??????????????????
												</option>
												<option value="bn_BD" lang="bn">
													???????????????
												</option>
												<option value="bo" lang="bo">
													?????????????????????
												</option>
												<option value="bs_BA" lang="bs">
													Bosanski
												</option>
												<option value="ca" lang="ca">
													Catal??
												</option>
												<option value="ceb" lang="ceb">
													Cebuano
												</option>
												<option value="cs_CZ" lang="cs">
													??e??tina
												</option>
												<option value="cy" lang="cy">
													Cymraeg
												</option>
												<option value="da_DK" lang="da">
													Dansk
												</option>
												<option value="de_DE_formal" lang="de">
													Deutsch (Sie)
												</option>
												<option value="de_CH" lang="de">
													Deutsch (Schweiz)
												</option>
												<option value="de_DE" lang="de">
													Deutsch
												</option>
												<option value="de_AT" lang="de">
													Deutsch (??sterreich)
												</option>
												<option value="de_CH_informal" lang="de">
													Deutsch (Schweiz, Du)
												</option>
												<option value="dsb" lang="dsb">
													Dolnoserb????ina
												</option>
												<option value="dzo" lang="dz">
													??????????????????
												</option>
												<option value="el" lang="el">
													????????????????
												</option>
												<option value="en_GB" lang="en">
													English (UK)
												</option>
												<option value="en_AU" lang="en">
													English (Australia)
												</option>
												<option value="en_ZA" lang="en">
													English (South Africa)
												</option>
												<option value="en_NZ" lang="en">
													English (New Zealand)
												</option>
												<option value="en_CA" lang="en">
													English (Canada)
												</option>
												<option value="eo" lang="eo">
													Esperanto
												</option>
												<option value="es_ES" lang="es">
													Espa??ol
												</option>
												<option value="es_CO" lang="es">
													Espa??ol de Colombia
												</option>
												<option value="es_AR" lang="es">
													Espa??ol de Argentina
												</option>
												<option value="es_VE" lang="es">
													Espa??ol de Venezuela
												</option>
												<option value="es_EC" lang="es">
													Espa??ol de Ecuador
												</option>
												<option value="es_PE" lang="es">
													Espa??ol de Per??
												</option>
												<option value="es_DO" lang="es">
													Espa??ol de Rep??blica Dominicana
												</option>
												<option value="es_UY" lang="es">
													Espa??ol de Uruguay
												</option>
												<option value="es_CL" lang="es">
													Espa??ol de Chile
												</option>
												<option value="es_PR" lang="es">
													Espa??ol de Puerto Rico
												</option>
												<option value="es_GT" lang="es">
													Espa??ol de Guatemala
												</option>
												<option value="es_CR" lang="es">
													Espa??ol de Costa Rica
												</option>
												<option value="es_MX" lang="es">
													Espa??ol de M??xico
												</option>
												<option value="et" lang="et">
													Eesti
												</option>
												<option value="eu" lang="eu">
													Euskara
												</option>
												<option value="fa_AF" lang="fa">
													(?????????? (??????????????????
												</option>
												<option value="fa_IR" lang="fa">
													??????????
												</option>
												<option value="fi" lang="fi">
													Suomi
												</option>
												<option value="fr_FR" lang="fr">
													Fran??ais
												</option>
												<option value="fr_CA" lang="fr">
													Fran??ais du Canada
												</option>
												<option value="fr_BE" lang="fr">
													Fran??ais de Belgique
												</option>
												<option value="fur" lang="fur">
													Friulian
												</option>
												<option value="fy" lang="fy">
													Frysk
												</option>
												<option value="gd" lang="gd">
													G??idhlig
												</option>
												<option value="gl_ES" lang="gl">
													Galego
												</option>
												<option value="gu" lang="gu">
													?????????????????????
												</option>
												<option value="haz" lang="haz">
													?????????? ????
												</option>
												<option value="he_IL" lang="he">
													????????????????
												</option>
												<option value="hi_IN" lang="hi">
													??????????????????
												</option>
												<option value="hr" lang="hr">
													Hrvatski
												</option>
												<option value="hsb" lang="hsb">
													Hornjoserb????ina
												</option>
												<option value="hu_HU" lang="hu">
													Magyar
												</option>
												<option value="hy" lang="hy">
													??????????????
												</option>
												<option value="id_ID" lang="id">
													Bahasa Indonesia
												</option>
												<option value="is_IS" lang="is">
													??slenska
												</option>
												<option value="it_IT" lang="it">
													Italiano
												</option>
												<option value="ja" lang="ja">
													?????????
												</option>
												<option value="jv_ID" lang="jv">
													Basa Jawa
												</option>
												<option value="ka_GE" lang="ka">
													?????????????????????
												</option>
												<option value="kab" lang="kab">
													Taqbaylit
												</option>
												<option value="kk" lang="kk">
													?????????? ????????
												</option>
												<option value="km" lang="km">
													???????????????????????????
												</option>
												<option value="kn" lang="kn">
													???????????????
												</option>
												<option value="ko_KR" lang="ko">
													?????????
												</option>
												<option value="ckb" lang="ku">
													?????????????
												</option>
												<option value="lo" lang="lo">
													?????????????????????
												</option>
												<option value="lt_LT" lang="lt">
													Lietuvi?? kalba
												</option>
												<option value="lv" lang="lv">
													Latvie??u valoda
												</option>
												<option value="mk_MK" lang="mk">
													???????????????????? ??????????
												</option>
												<option value="ml_IN" lang="ml">
													??????????????????
												</option>
												<option value="mn" lang="mn">
													????????????
												</option>
												<option value="mr" lang="mr">
													???????????????
												</option>
												<option value="ms_MY" lang="ms">
													Bahasa Melayu
												</option>
												<option value="my_MM" lang="my">
													???????????????
												</option>
												<option value="nb_NO" lang="nb">
													Norsk bokm??l
												</option>
												<option value="ne_NP" lang="ne">
													??????????????????
												</option>
												<option value="nl_NL" lang="nl">
													Nederlands
												</option>
												<option value="nl_NL_formal" lang="nl">
													Nederlands (Formeel)
												</option>
												<option value="nl_BE" lang="nl">
													Nederlands (Belgi??)
												</option>
												<option value="nn_NO" lang="nn">
													Norsk nynorsk
												</option>
												<option value="oci" lang="oc">
													Occitan
												</option>
												<option value="pa_IN" lang="pa">
													??????????????????
												</option>
												<option value="pl_PL" lang="pl">
													Polski
												</option>
												<option value="ps" lang="ps">
													????????
												</option>
												<option value="pt_PT_ao90" lang="pt">
													Portugu??s (AO90)
												</option>
												<option value="pt_PT" lang="pt">
													Portugu??s
												</option>
												<option value="pt_AO" lang="pt">
													Portugu??s de Angola
												</option>
												<option value="pt_BR" lang="pt">
													Portugu??s do Brasil
												</option>
												<option value="rhg" lang="rhg">
													Ru??inga
												</option>
												<option value="ro_RO" lang="ro">
													Rom??n??
												</option>
												<option value="ru_RU" lang="ru">
													??????????????
												</option>
												<option value="sah" lang="sah">
													??????????????
												</option>
												<option value="snd" lang="sd">
													????????
												</option>
												<option value="si_LK" lang="si">
													???????????????
												</option>
												<option value="sk_SK" lang="sk">
													Sloven??ina
												</option>
												<option value="skr" lang="skr">
													??????????????
												</option>
												<option value="sl_SI" lang="sl">
													Sloven????ina
												</option>
												<option value="sq" lang="sq">
													Shqip
												</option>
												<option value="sr_RS" lang="sr">
													???????????? ??????????
												</option>
												<option value="sv_SE" lang="sv">
													Svenska
												</option>
												<option value="sw" lang="sw">
													Kiswahili
												</option>
												<option value="szl" lang="szl">
													??l??nsk?? g??dka
												</option>
												<option value="ta_IN" lang="ta">
													???????????????
												</option>
												<option value="ta_LK" lang="ta">
													???????????????
												</option>
												<option value="te" lang="te">
													??????????????????
												</option>
												<option value="th" lang="th">
													?????????
												</option>
												<option value="tl" lang="tl">
													Tagalog
												</option>
												<option value="tr_TR" lang="tr">
													T??rk??e
												</option>
												<option value="tt_RU" lang="tt">
													?????????? ????????
												</option>
												<option value="tah" lang="ty">
													Reo Tahiti
												</option>
												<option value="ug_CN" lang="ug">
													????????????????
												</option>
												<option value="uk" lang="uk">
													????????????????????
												</option>
												<option value="ur" lang="ur">
													????????
												</option>
												<option value="uz_UZ" lang="uz">
													O???zbekcha
												</option>
												<option value="vi" lang="vi">
													Ti???ng Vi???t
												</option>
												<option value="zh_HK" lang="zh">
													????????????
												</option>
												<option value="zh_CN" lang="zh">
													????????????
												</option>
												<option value="zh_TW" lang="zh">
													????????????
												</option>
											</optgroup>
										</select>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="timezone_string">Timezone</label>
									</th>
									<td>
										<select id="timezone_string" name="timezone_string" aria-describedby="timezone-description">
											<optgroup label="Africa">
												<option value="Africa/Abidjan">Abidjan</option>
												<option value="Africa/Accra">Accra</option>
												<option value="Africa/Addis_Ababa">Addis Ababa</option>
												<option value="Africa/Algiers">Algiers</option>
												<option value="Africa/Asmara">Asmara</option>
												<option value="Africa/Bamako">Bamako</option>
												<option value="Africa/Bangui">Bangui</option>
												<option value="Africa/Banjul">Banjul</option>
												<option value="Africa/Bissau">Bissau</option>
												<option value="Africa/Blantyre">Blantyre</option>
												<option value="Africa/Brazzaville">Brazzaville</option>
												<option value="Africa/Bujumbura">Bujumbura</option>
												<option value="Africa/Cairo">Cairo</option>
												<option value="Africa/Casablanca">Casablanca</option>
												<option value="Africa/Ceuta">Ceuta</option>
												<option value="Africa/Conakry">Conakry</option>
												<option value="Africa/Dakar">Dakar</option>
												<option value="Africa/Dar_es_Salaam">Dar es Salaam</option>
												<option value="Africa/Djibouti">Djibouti</option>
												<option value="Africa/Douala">Douala</option>
												<option value="Africa/El_Aaiun">El Aaiun</option>
												<option value="Africa/Freetown">Freetown</option>
												<option value="Africa/Gaborone">Gaborone</option>
												<option value="Africa/Harare">Harare</option>
												<option value="Africa/Johannesburg">Johannesburg</option>
												<option value="Africa/Juba">Juba</option>
												<option value="Africa/Kampala">Kampala</option>
												<option value="Africa/Khartoum">Khartoum</option>
												<option value="Africa/Kigali">Kigali</option>
												<option value="Africa/Kinshasa">Kinshasa</option>
												<option value="Africa/Lagos">Lagos</option>
												<option value="Africa/Libreville">Libreville</option>
												<option value="Africa/Lome">Lome</option>
												<option value="Africa/Luanda">Luanda</option>
												<option value="Africa/Lubumbashi">Lubumbashi</option>
												<option value="Africa/Lusaka">Lusaka</option>
												<option value="Africa/Malabo">Malabo</option>
												<option value="Africa/Maputo">Maputo</option>
												<option value="Africa/Maseru">Maseru</option>
												<option value="Africa/Mbabane">Mbabane</option>
												<option value="Africa/Mogadishu">Mogadishu</option>
												<option value="Africa/Monrovia">Monrovia</option>
												<option value="Africa/Nairobi">Nairobi</option>
												<option value="Africa/Ndjamena">Ndjamena</option>
												<option value="Africa/Niamey">Niamey</option>
												<option value="Africa/Nouakchott">Nouakchott</option>
												<option value="Africa/Ouagadougou">Ouagadougou</option>
												<option value="Africa/Porto-Novo">Porto-Novo</option>
												<option value="Africa/Sao_Tome">Sao Tome</option>
												<option value="Africa/Tripoli">Tripoli</option>
												<option value="Africa/Tunis">Tunis</option>
												<option value="Africa/Windhoek">Windhoek</option>
											</optgroup>
											<optgroup label="America">
												<option value="America/Adak">Adak</option>
												<option value="America/Anchorage">Anchorage</option>
												<option value="America/Anguilla">Anguilla</option>
												<option value="America/Antigua">Antigua</option>
												<option value="America/Araguaina">Araguaina</option>
												<option value="America/Argentina/Buenos_Aires">Argentina - Buenos Aires</option>
												<option value="America/Argentina/Catamarca">Argentina - Catamarca</option>
												<option value="America/Argentina/Cordoba">Argentina - Cordoba</option>
												<option value="America/Argentina/Jujuy">Argentina - Jujuy</option>
												<option value="America/Argentina/La_Rioja">Argentina - La Rioja</option>
												<option value="America/Argentina/Mendoza">Argentina - Mendoza</option>
												<option value="America/Argentina/Rio_Gallegos">Argentina - Rio Gallegos</option>
												<option value="America/Argentina/Salta">Argentina - Salta</option>
												<option value="America/Argentina/San_Juan">Argentina - San Juan</option>
												<option value="America/Argentina/San_Luis">Argentina - San Luis</option>
												<option value="America/Argentina/Tucuman">Argentina - Tucuman</option>
												<option value="America/Argentina/Ushuaia">Argentina - Ushuaia</option>
												<option value="America/Aruba">Aruba</option>
												<option value="America/Asuncion">Asuncion</option>
												<option value="America/Atikokan">Atikokan</option>
												<option value="America/Bahia">Bahia</option>
												<option value="America/Bahia_Banderas">Bahia Banderas</option>
												<option value="America/Barbados">Barbados</option>
												<option value="America/Belem">Belem</option>
												<option value="America/Belize">Belize</option>
												<option value="America/Blanc-Sablon">Blanc-Sablon</option>
												<option value="America/Boa_Vista">Boa Vista</option>
												<option value="America/Bogota">Bogota</option>
												<option value="America/Boise">Boise</option>
												<option value="America/Cambridge_Bay">Cambridge Bay</option>
												<option value="America/Campo_Grande">Campo Grande</option>
												<option value="America/Cancun">Cancun</option>
												<option value="America/Caracas">Caracas</option>
												<option value="America/Cayenne">Cayenne</option>
												<option value="America/Cayman">Cayman</option>
												<option value="America/Chicago">Chicago</option>
												<option value="America/Chihuahua">Chihuahua</option>
												<option value="America/Costa_Rica">Costa Rica</option>
												<option value="America/Creston">Creston</option>
												<option value="America/Cuiaba">Cuiaba</option>
												<option value="America/Curacao">Curacao</option>
												<option value="America/Danmarkshavn">Danmarkshavn</option>
												<option value="America/Dawson">Dawson</option>
												<option value="America/Dawson_Creek">Dawson Creek</option>
												<option value="America/Denver">Denver</option>
												<option value="America/Detroit">Detroit</option>
												<option value="America/Dominica">Dominica</option>
												<option value="America/Edmonton">Edmonton</option>
												<option value="America/Eirunepe">Eirunepe</option>
												<option value="America/El_Salvador">El Salvador</option>
												<option value="America/Fortaleza">Fortaleza</option>
												<option value="America/Fort_Nelson">Fort Nelson</option>
												<option value="America/Glace_Bay">Glace Bay</option>
												<option value="America/Goose_Bay">Goose Bay</option>
												<option value="America/Grand_Turk">Grand Turk</option>
												<option value="America/Grenada">Grenada</option>
												<option value="America/Guadeloupe">Guadeloupe</option>
												<option value="America/Guatemala">Guatemala</option>
												<option value="America/Guayaquil">Guayaquil</option>
												<option value="America/Guyana">Guyana</option>
												<option value="America/Halifax">Halifax</option>
												<option value="America/Havana">Havana</option>
												<option value="America/Hermosillo">Hermosillo</option>
												<option value="America/Indiana/Indianapolis">Indiana - Indianapolis</option>
												<option value="America/Indiana/Knox">Indiana - Knox</option>
												<option value="America/Indiana/Marengo">Indiana - Marengo</option>
												<option value="America/Indiana/Petersburg">Indiana - Petersburg</option>
												<option value="America/Indiana/Tell_City">Indiana - Tell City</option>
												<option value="America/Indiana/Vevay">Indiana - Vevay</option>
												<option value="America/Indiana/Vincennes">Indiana - Vincennes</option>
												<option value="America/Indiana/Winamac">Indiana - Winamac</option>
												<option value="America/Inuvik">Inuvik</option>
												<option value="America/Iqaluit">Iqaluit</option>
												<option value="America/Jamaica">Jamaica</option>
												<option value="America/Juneau">Juneau</option>
												<option value="America/Kentucky/Louisville">Kentucky - Louisville</option>
												<option value="America/Kentucky/Monticello">Kentucky - Monticello</option>
												<option value="America/Kralendijk">Kralendijk</option>
												<option value="America/La_Paz">La Paz</option>
												<option value="America/Lima">Lima</option>
												<option value="America/Los_Angeles">Los Angeles</option>
												<option value="America/Lower_Princes">Lower Princes</option>
												<option value="America/Maceio">Maceio</option>
												<option value="America/Managua">Managua</option>
												<option value="America/Manaus">Manaus</option>
												<option value="America/Marigot">Marigot</option>
												<option value="America/Martinique">Martinique</option>
												<option value="America/Matamoros">Matamoros</option>
												<option value="America/Mazatlan">Mazatlan</option>
												<option value="America/Menominee">Menominee</option>
												<option value="America/Merida">Merida</option>
												<option value="America/Metlakatla">Metlakatla</option>
												<option value="America/Mexico_City">Mexico City</option>
												<option value="America/Miquelon">Miquelon</option>
												<option value="America/Moncton">Moncton</option>
												<option value="America/Monterrey">Monterrey</option>
												<option value="America/Montevideo">Montevideo</option>
												<option value="America/Montserrat">Montserrat</option>
												<option value="America/Nassau">Nassau</option>
												<option value="America/New_York">New York</option>
												<option value="America/Nipigon">Nipigon</option>
												<option value="America/Nome">Nome</option>
												<option value="America/Noronha">Noronha</option>
												<option value="America/North_Dakota/Beulah">North Dakota - Beulah</option>
												<option value="America/North_Dakota/Center">North Dakota - Center</option>
												<option value="America/North_Dakota/New_Salem">North Dakota - New Salem</option>
												<option value="America/Nuuk">Nuuk</option>
												<option value="America/Ojinaga">Ojinaga</option>
												<option value="America/Panama">Panama</option>
												<option value="America/Pangnirtung">Pangnirtung</option>
												<option value="America/Paramaribo">Paramaribo</option>
												<option value="America/Phoenix">Phoenix</option>
												<option value="America/Port-au-Prince">Port-au-Prince</option>
												<option value="America/Port_of_Spain">Port of Spain</option>
												<option value="America/Porto_Velho">Porto Velho</option>
												<option value="America/Puerto_Rico">Puerto Rico</option>
												<option value="America/Punta_Arenas">Punta Arenas</option>
												<option value="America/Rainy_River">Rainy River</option>
												<option value="America/Rankin_Inlet">Rankin Inlet</option>
												<option value="America/Recife">Recife</option>
												<option value="America/Regina">Regina</option>
												<option value="America/Resolute">Resolute</option>
												<option value="America/Rio_Branco">Rio Branco</option>
												<option value="America/Santarem">Santarem</option>
												<option value="America/Santiago">Santiago</option>
												<option value="America/Santo_Domingo">Santo Domingo</option>
												<option value="America/Sao_Paulo">Sao Paulo</option>
												<option value="America/Scoresbysund">Scoresbysund</option>
												<option value="America/Sitka">Sitka</option>
												<option value="America/St_Barthelemy">St Barthelemy</option>
												<option value="America/St_Johns">St Johns</option>
												<option value="America/St_Kitts">St Kitts</option>
												<option value="America/St_Lucia">St Lucia</option>
												<option value="America/St_Thomas">St Thomas</option>
												<option value="America/St_Vincent">St Vincent</option>
												<option value="America/Swift_Current">Swift Current</option>
												<option value="America/Tegucigalpa">Tegucigalpa</option>
												<option value="America/Thule">Thule</option>
												<option value="America/Thunder_Bay">Thunder Bay</option>
												<option value="America/Tijuana">Tijuana</option>
												<option value="America/Toronto">Toronto</option>
												<option value="America/Tortola">Tortola</option>
												<option value="America/Vancouver">Vancouver</option>
												<option value="America/Whitehorse">Whitehorse</option>
												<option value="America/Winnipeg">Winnipeg</option>
												<option value="America/Yakutat">Yakutat</option>
												<option value="America/Yellowknife">Yellowknife</option>
											</optgroup>
											<optgroup label="Antarctica">
												<option value="Antarctica/Casey">Casey</option>
												<option value="Antarctica/Davis">Davis</option>
												<option value="Antarctica/DumontDUrville">DumontDUrville</option>
												<option value="Antarctica/Macquarie">Macquarie</option>
												<option value="Antarctica/Mawson">Mawson</option>
												<option value="Antarctica/McMurdo">McMurdo</option>
												<option value="Antarctica/Palmer">Palmer</option>
												<option value="Antarctica/Rothera">Rothera</option>
												<option value="Antarctica/Syowa">Syowa</option>
												<option value="Antarctica/Troll">Troll</option>
												<option value="Antarctica/Vostok">Vostok</option>
											</optgroup>
											<optgroup label="Arctic">
												<option value="Arctic/Longyearbyen">Longyearbyen</option>
											</optgroup>
											<optgroup label="Asia">
												<option value="Asia/Aden">Aden</option>
												<option value="Asia/Almaty">Almaty</option>
												<option value="Asia/Amman">Amman</option>
												<option value="Asia/Anadyr">Anadyr</option>
												<option value="Asia/Aqtau">Aqtau</option>
												<option value="Asia/Aqtobe">Aqtobe</option>
												<option value="Asia/Ashgabat">Ashgabat</option>
												<option value="Asia/Atyrau">Atyrau</option>
												<option value="Asia/Baghdad">Baghdad</option>
												<option value="Asia/Bahrain">Bahrain</option>
												<option value="Asia/Baku">Baku</option>
												<option value="Asia/Bangkok">Bangkok</option>
												<option value="Asia/Barnaul">Barnaul</option>
												<option value="Asia/Beirut">Beirut</option>
												<option value="Asia/Bishkek">Bishkek</option>
												<option value="Asia/Brunei">Brunei</option>
												<option value="Asia/Chita">Chita</option>
												<option value="Asia/Choibalsan">Choibalsan</option>
												<option value="Asia/Colombo">Colombo</option>
												<option value="Asia/Damascus">Damascus</option>
												<option value="Asia/Dhaka">Dhaka</option>
												<option value="Asia/Dili">Dili</option>
												<option value="Asia/Dubai">Dubai</option>
												<option value="Asia/Dushanbe">Dushanbe</option>
												<option value="Asia/Famagusta">Famagusta</option>
												<option value="Asia/Gaza">Gaza</option>
												<option value="Asia/Hebron">Hebron</option>
												<option value="Asia/Ho_Chi_Minh">Ho Chi Minh</option>
												<option value="Asia/Hong_Kong">Hong Kong</option>
												<option value="Asia/Hovd">Hovd</option>
												<option value="Asia/Irkutsk">Irkutsk</option>
												<option value="Asia/Jakarta">Jakarta</option>
												<option value="Asia/Jayapura">Jayapura</option>
												<option value="Asia/Jerusalem">Jerusalem</option>
												<option value="Asia/Kabul">Kabul</option>
												<option value="Asia/Kamchatka">Kamchatka</option>
												<option value="Asia/Karachi">Karachi</option>
												<option value="Asia/Kathmandu">Kathmandu</option>
												<option value="Asia/Khandyga">Khandyga</option>
												<option value="Asia/Kolkata">Kolkata</option>
												<option value="Asia/Krasnoyarsk">Krasnoyarsk</option>
												<option value="Asia/Kuala_Lumpur">Kuala Lumpur</option>
												<option value="Asia/Kuching">Kuching</option>
												<option value="Asia/Kuwait">Kuwait</option>
												<option value="Asia/Macau">Macau</option>
												<option value="Asia/Magadan">Magadan</option>
												<option value="Asia/Makassar">Makassar</option>
												<option value="Asia/Manila">Manila</option>
												<option value="Asia/Muscat">Muscat</option>
												<option value="Asia/Nicosia">Nicosia</option>
												<option value="Asia/Novokuznetsk">Novokuznetsk</option>
												<option value="Asia/Novosibirsk">Novosibirsk</option>
												<option value="Asia/Omsk">Omsk</option>
												<option value="Asia/Oral">Oral</option>
												<option value="Asia/Phnom_Penh">Phnom Penh</option>
												<option value="Asia/Pontianak">Pontianak</option>
												<option value="Asia/Pyongyang">Pyongyang</option>
												<option value="Asia/Qatar">Qatar</option>
												<option value="Asia/Qostanay">Qostanay</option>
												<option value="Asia/Qyzylorda">Qyzylorda</option>
												<option value="Asia/Riyadh">Riyadh</option>
												<option value="Asia/Sakhalin">Sakhalin</option>
												<option value="Asia/Samarkand">Samarkand</option>
												<option value="Asia/Seoul">Seoul</option>
												<option value="Asia/Shanghai">Shanghai</option>
												<option value="Asia/Singapore">Singapore</option>
												<option value="Asia/Srednekolymsk">Srednekolymsk</option>
												<option value="Asia/Taipei">Taipei</option>
												<option value="Asia/Tashkent">Tashkent</option>
												<option value="Asia/Tbilisi">Tbilisi</option>
												<option value="Asia/Tehran">Tehran</option>
												<option value="Asia/Thimphu">Thimphu</option>
												<option value="Asia/Tokyo">Tokyo</option>
												<option value="Asia/Tomsk">Tomsk</option>
												<option value="Asia/Ulaanbaatar">Ulaanbaatar</option>
												<option value="Asia/Urumqi">Urumqi</option>
												<option value="Asia/Ust-Nera">Ust-Nera</option>
												<option value="Asia/Vientiane">Vientiane</option>
												<option value="Asia/Vladivostok">Vladivostok</option>
												<option value="Asia/Yakutsk">Yakutsk</option>
												<option value="Asia/Yangon">Yangon</option>
												<option value="Asia/Yekaterinburg">Yekaterinburg</option>
												<option value="Asia/Yerevan">Yerevan</option>
											</optgroup>
											<optgroup label="Atlantic">
												<option value="Atlantic/Azores">Azores</option>
												<option value="Atlantic/Bermuda">Bermuda</option>
												<option value="Atlantic/Canary">Canary</option>
												<option value="Atlantic/Cape_Verde">Cape Verde</option>
												<option value="Atlantic/Faroe">Faroe</option>
												<option value="Atlantic/Madeira">Madeira</option>
												<option value="Atlantic/Reykjavik">Reykjavik</option>
												<option value="Atlantic/South_Georgia">South Georgia</option>
												<option value="Atlantic/Stanley">Stanley</option>
												<option value="Atlantic/St_Helena">St Helena</option>
											</optgroup>
											<optgroup label="Australia">
												<option value="Australia/Adelaide">Adelaide</option>
												<option value="Australia/Brisbane">Brisbane</option>
												<option value="Australia/Broken_Hill">Broken Hill</option>
												<option value="Australia/Darwin">Darwin</option>
												<option value="Australia/Eucla">Eucla</option>
												<option value="Australia/Hobart">Hobart</option>
												<option value="Australia/Lindeman">Lindeman</option>
												<option value="Australia/Lord_Howe">Lord Howe</option>
												<option value="Australia/Melbourne">Melbourne</option>
												<option value="Australia/Perth">Perth</option>
												<option value="Australia/Sydney">Sydney</option>
											</optgroup>
											<optgroup label="Europe">
												<option value="Europe/Amsterdam">Amsterdam</option>
												<option value="Europe/Andorra">Andorra</option>
												<option value="Europe/Astrakhan">Astrakhan</option>
												<option value="Europe/Athens">Athens</option>
												<option value="Europe/Belgrade">Belgrade</option>
												<option value="Europe/Berlin">Berlin</option>
												<option value="Europe/Bratislava">Bratislava</option>
												<option value="Europe/Brussels">Brussels</option>
												<option value="Europe/Bucharest">Bucharest</option>
												<option value="Europe/Budapest">Budapest</option>
												<option value="Europe/Busingen">Busingen</option>
												<option value="Europe/Chisinau">Chisinau</option>
												<option value="Europe/Copenhagen">Copenhagen</option>
												<option value="Europe/Dublin">Dublin</option>
												<option value="Europe/Gibraltar">Gibraltar</option>
												<option value="Europe/Guernsey">Guernsey</option>
												<option value="Europe/Helsinki">Helsinki</option>
												<option value="Europe/Isle_of_Man">Isle of Man</option>
												<option value="Europe/Istanbul">Istanbul</option>
												<option value="Europe/Jersey">Jersey</option>
												<option value="Europe/Kaliningrad">Kaliningrad</option>
												<option value="Europe/Kiev">Kiev</option>
												<option value="Europe/Kirov">Kirov</option>
												<option value="Europe/Lisbon">Lisbon</option>
												<option value="Europe/Ljubljana">Ljubljana</option>
												<option value="Europe/London">London</option>
												<option value="Europe/Luxembourg">Luxembourg</option>
												<option value="Europe/Madrid">Madrid</option>
												<option value="Europe/Malta">Malta</option>
												<option value="Europe/Mariehamn">Mariehamn</option>
												<option value="Europe/Minsk">Minsk</option>
												<option value="Europe/Monaco">Monaco</option>
												<option value="Europe/Moscow">Moscow</option>
												<option value="Europe/Oslo">Oslo</option>
												<option value="Europe/Paris">Paris</option>
												<option value="Europe/Podgorica">Podgorica</option>
												<option value="Europe/Prague">Prague</option>
												<option value="Europe/Riga">Riga</option>
												<option value="Europe/Rome">Rome</option>
												<option value="Europe/Samara">Samara</option>
												<option value="Europe/San_Marino">San Marino</option>
												<option value="Europe/Sarajevo">Sarajevo</option>
												<option value="Europe/Saratov">Saratov</option>
												<option value="Europe/Simferopol">Simferopol</option>
												<option value="Europe/Skopje">Skopje</option>
												<option value="Europe/Sofia">Sofia</option>
												<option value="Europe/Stockholm">Stockholm</option>
												<option value="Europe/Tallinn">Tallinn</option>
												<option value="Europe/Tirane">Tirane</option>
												<option value="Europe/Ulyanovsk">Ulyanovsk</option>
												<option value="Europe/Uzhgorod">Uzhgorod</option>
												<option value="Europe/Vaduz">Vaduz</option>
												<option value="Europe/Vatican">Vatican</option>
												<option value="Europe/Vienna">Vienna</option>
												<option value="Europe/Vilnius">Vilnius</option>
												<option value="Europe/Volgograd">Volgograd</option>
												<option value="Europe/Warsaw">Warsaw</option>
												<option value="Europe/Zagreb">Zagreb</option>
												<option value="Europe/Zaporozhye">Zaporozhye</option>
												<option value="Europe/Zurich">Zurich</option>
											</optgroup>
											<optgroup label="Indian">
												<option value="Indian/Antananarivo">Antananarivo</option>
												<option value="Indian/Chagos">Chagos</option>
												<option value="Indian/Christmas">Christmas</option>
												<option value="Indian/Cocos">Cocos</option>
												<option value="Indian/Comoro">Comoro</option>
												<option value="Indian/Kerguelen">Kerguelen</option>
												<option value="Indian/Mahe">Mahe</option>
												<option value="Indian/Maldives">Maldives</option>
												<option value="Indian/Mauritius">Mauritius</option>
												<option value="Indian/Mayotte">Mayotte</option>
												<option value="Indian/Reunion">Reunion</option>
											</optgroup>
											<optgroup label="Pacific">
												<option value="Pacific/Apia">Apia</option>
												<option value="Pacific/Auckland">Auckland</option>
												<option value="Pacific/Bougainville">Bougainville</option>
												<option value="Pacific/Chatham">Chatham</option>
												<option value="Pacific/Chuuk">Chuuk</option>
												<option value="Pacific/Easter">Easter</option>
												<option value="Pacific/Efate">Efate</option>
												<option value="Pacific/Fakaofo">Fakaofo</option>
												<option value="Pacific/Fiji">Fiji</option>
												<option value="Pacific/Funafuti">Funafuti</option>
												<option value="Pacific/Galapagos">Galapagos</option>
												<option value="Pacific/Gambier">Gambier</option>
												<option value="Pacific/Guadalcanal">Guadalcanal</option>
												<option value="Pacific/Guam">Guam</option>
												<option value="Pacific/Honolulu">Honolulu</option>
												<option value="Pacific/Kanton">Kanton</option>
												<option value="Pacific/Kiritimati">Kiritimati</option>
												<option value="Pacific/Kosrae">Kosrae</option>
												<option value="Pacific/Kwajalein">Kwajalein</option>
												<option value="Pacific/Majuro">Majuro</option>
												<option value="Pacific/Marquesas">Marquesas</option>
												<option value="Pacific/Midway">Midway</option>
												<option value="Pacific/Nauru">Nauru</option>
												<option value="Pacific/Niue">Niue</option>
												<option value="Pacific/Norfolk">Norfolk</option>
												<option value="Pacific/Noumea">Noumea</option>
												<option value="Pacific/Pago_Pago">Pago Pago</option>
												<option value="Pacific/Palau">Palau</option>
												<option value="Pacific/Pitcairn">Pitcairn</option>
												<option value="Pacific/Pohnpei">Pohnpei</option>
												<option value="Pacific/Port_Moresby">Port Moresby</option>
												<option value="Pacific/Rarotonga">Rarotonga</option>
												<option value="Pacific/Saipan">Saipan</option>
												<option value="Pacific/Tahiti">Tahiti</option>
												<option value="Pacific/Tarawa">Tarawa</option>
												<option value="Pacific/Tongatapu">Tongatapu</option>
												<option value="Pacific/Wake">Wake</option>
												<option value="Pacific/Wallis">Wallis</option>
											</optgroup>
											<optgroup label="UTC">
												<option value="UTC">UTC</option>
											</optgroup>
											<optgroup label="Manual Offsets">
												<option value="UTC-12">UTC-12</option>
												<option value="UTC-11.5">UTC-11:30</option>
												<option value="UTC-11">UTC-11</option>
												<option value="UTC-10.5">UTC-10:30</option>
												<option value="UTC-10">UTC-10</option>
												<option value="UTC-9.5">UTC-9:30</option>
												<option value="UTC-9">UTC-9</option>
												<option value="UTC-8.5">UTC-8:30</option>
												<option value="UTC-8">UTC-8</option>
												<option value="UTC-7.5">UTC-7:30</option>
												<option value="UTC-7">UTC-7</option>
												<option value="UTC-6.5">UTC-6:30</option>
												<option value="UTC-6">UTC-6</option>
												<option value="UTC-5.5">UTC-5:30</option>
												<option value="UTC-5">UTC-5</option>
												<option value="UTC-4.5">UTC-4:30</option>
												<option value="UTC-4">UTC-4</option>
												<option value="UTC-3.5">UTC-3:30</option>
												<option value="UTC-3">UTC-3</option>
												<option value="UTC-2.5">UTC-2:30</option>
												<option value="UTC-2">UTC-2</option>
												<option value="UTC-1.5">UTC-1:30</option>
												<option value="UTC-1">UTC-1</option>
												<option value="UTC-0.5">UTC-0:30</option>
												<option selected={true} value="UTC+0">
													UTC+0
												</option>
												<option value="UTC+0.5">UTC+0:30</option>
												<option value="UTC+1">UTC+1</option>
												<option value="UTC+1.5">UTC+1:30</option>
												<option value="UTC+2">UTC+2</option>
												<option value="UTC+2.5">UTC+2:30</option>
												<option value="UTC+3">UTC+3</option>
												<option value="UTC+3.5">UTC+3:30</option>
												<option value="UTC+4">UTC+4</option>
												<option value="UTC+4.5">UTC+4:30</option>
												<option value="UTC+5">UTC+5</option>
												<option value="UTC+5.5">UTC+5:30</option>
												<option value="UTC+5.75">UTC+5:45</option>
												<option value="UTC+6">UTC+6</option>
												<option value="UTC+6.5">UTC+6:30</option>
												<option value="UTC+7">UTC+7</option>
												<option value="UTC+7.5">UTC+7:30</option>
												<option value="UTC+8">UTC+8</option>
												<option value="UTC+8.5">UTC+8:30</option>
												<option value="UTC+8.75">UTC+8:45</option>
												<option value="UTC+9">UTC+9</option>
												<option value="UTC+9.5">UTC+9:30</option>
												<option value="UTC+10">UTC+10</option>
												<option value="UTC+10.5">UTC+10:30</option>
												<option value="UTC+11">UTC+11</option>
												<option value="UTC+11.5">UTC+11:30</option>
												<option value="UTC+12">UTC+12</option>
												<option value="UTC+12.75">UTC+12:45</option>
												<option value="UTC+13">UTC+13</option>
												<option value="UTC+13.75">UTC+13:45</option>
												<option value="UTC+14">UTC+14</option>
											</optgroup>
										</select>
										<p className="description" id="timezone-description">
											Choose either a city in the same timezone as you or a <abbr>UTC</abbr> (Coordinated Universal Time) time offset.
										</p>
										<p className="timezone-info">
											<span id="utc-time">
												Universal time is <code>2023-02-17 10:48:58</code>.
											</span>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">Date Format</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Date Format</span>
											</legend>
											<label>
												<input type="radio" name="date_format" defaultValue="F j, Y" defaultChecked={true} /> <span className="date-time-text format-i18n">February 17, 2023</span>
												<code>F j, Y</code>
											</label>
											<br />
											<label>
												<input type="radio" name="date_format" defaultValue="Y-m-d" /> <span className="date-time-text format-i18n">2023-02-17</span>
												<code>Y-m-d</code>
											</label>
											<br />
											<label>
												<input type="radio" name="date_format" defaultValue="m/d/Y" /> <span className="date-time-text format-i18n">02/17/2023</span>
												<code>m/d/Y</code>
											</label>
											<br />
											<label>
												<input type="radio" name="date_format" defaultValue="d/m/Y" /> <span className="date-time-text format-i18n">17/02/2023</span>
												<code>d/m/Y</code>
											</label>
											<br />
											<label>
												<input type="radio" name="date_format" id="date_format_custom_radio" defaultValue="\c\u\s\t\o\m" />
												<span className="date-time-text date-time-custom-text">
													Custom:
													<span className="screen-reader-text"> enter a custom date format in the following field</span>
												</span>
											</label>
											<label htmlFor="date_format_custom" className="screen-reader-text">
												Custom date format:
											</label>
											<input type="text" name="date_format_custom" id="date_format_custom" defaultValue="F j, Y" className="small-text" />
											<br />
											<p>
												<strong>Preview:</strong> <span className="example">February 17, 2023</span>
												<span className="spinner" />
											</p>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">Time Format</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Time Format</span>
											</legend>
											<label>
												<input type="radio" name="time_format" defaultValue="g:i a" defaultChecked={true} /> <span className="date-time-text format-i18n">10:48 am</span>
												<code>g:i a</code>
											</label>
											<br />
											<label>
												<input type="radio" name="time_format" defaultValue="g:i A" /> <span className="date-time-text format-i18n">10:48 AM</span>
												<code>g:i A</code>
											</label>
											<br />
											<label>
												<input type="radio" name="time_format" defaultValue="H:i" /> <span className="date-time-text format-i18n">10:48</span>
												<code>H:i</code>
											</label>
											<br />
											<label>
												<input type="radio" name="time_format" id="time_format_custom_radio" defaultValue="\c\u\s\t\o\m" />
												<span className="date-time-text date-time-custom-text">
													Custom:
													<span className="screen-reader-text"> enter a custom time format in the following field</span>
												</span>
											</label>
											<label htmlFor="time_format_custom" className="screen-reader-text">
												Custom time format:
											</label>
											<input type="text" name="time_format_custom" id="time_format_custom" defaultValue="g:i a" className="small-text" />
											<br />
											<p>
												<strong>Preview:</strong> <span className="example">10:48 am</span>
												<span className="spinner" />
											</p>
											<p className="date-time-doc">
												<a href="/">Documentation on date and time formatting</a>.
											</p>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="start_of_week">Week Starts On</label>
									</th>
									<td>
										<select name="start_of_week" id="start_of_week">
											<option value={0}>Sunday</option>
											<option value={1} selected={true}>
												Monday
											</option>
											<option value={2}>Tuesday</option>
											<option value={3}>Wednesday</option>
											<option value={4}>Thursday</option>
											<option value={5}>Friday</option>
											<option value={6}>Saturday</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<p className="submit">
							<input type="submit" name="submit" id="submit" className="button button-primary" defaultValue="Save Changes" />
						</p>
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
