package br.com.bluetasks.infrastructure.web.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.bluetasks.domain.user.AppUser;

@SuppressWarnings("serial")
public class UserdetailsImpl implements UserDetails{

	private String username;
	private String passoword;
	private String displayName;
	
	public UserdetailsImpl(AppUser appUser) {
		this.username = appUser.getUsername();
		this.passoword = appUser.getPassword();
		this.displayName = appUser.getDisplayName();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.NO_AUTHORITIES;
	}

	@Override
	public String getPassword() {
		return passoword;
	}
    @Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	public String getDisplayName() {
		return displayName;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
