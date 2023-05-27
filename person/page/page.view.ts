namespace $.$$ {

	export class $hyoo_intern_person_page extends $.$hyoo_intern_person_page {

		@ $mol_action
		campaign_add() {
			this.person().campaigns().item_make()
		}

		campaign( id: $mol_int62_string ) {
			return this.person().campaigns().item(id)
		}

		campaign_list() {
			return this.person().campaigns().ids().map( id => this.Campaign(id) )
		}

	}

}